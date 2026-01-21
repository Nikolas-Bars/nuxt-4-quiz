import { ref, computed, onMounted } from "vue";
import type { Product } from "~/components/local/shop-rd/ProductsSection.vue";

interface CartItem {
  product: Product;
  id: number;
  title: string;
  price: number;
  size?: string | null;
  count: number;
  image?: string;
}

const CART_KEY = "cartItems";
const CART_TOTAL_KEY = "cartTotal";
const cartItems = ref<CartItem[]>(
  process.client && localStorage.getItem(CART_KEY)
    ? JSON.parse(localStorage.getItem(CART_KEY)!)
    : []
);

const cartTotal = ref<number>(
  process.client && localStorage.getItem(CART_TOTAL_KEY)
    ? Number(localStorage.getItem(CART_TOTAL_KEY))
    : 0
);

const loadCart = () => {
  if (process.client) {
    const stored = localStorage.getItem(CART_KEY);
    if (stored) {
      try {
        cartItems.value = JSON.parse(stored);
      } catch {
        cartItems.value = [];
      }
    }
    calculateTotal();
  }
};

const saveCart = () => {
  if (process.client) {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems.value));
  }
};

const addToCart = (
  product: Product,
  count = 1,
  price: number,
  size?: string | null
) => {
  const existing = cartItems.value.find(
    (item) => item.id === product.id && item.size === size
  );
  if (existing) {
    existing.count += count;
  } else {
    cartItems.value.push({
      product,
      id: product.id,
      title: product.title,
      price,
      size: size || null,
      count,
      image: product.images?.[0]?.image,
    });
  }
  calculateTotal();
  saveCart();
};

const updateCount = (
  productId: number,
  count: number,
  size?: string | null
) => {
  const item = cartItems.value.find(
    (i) => i.id === productId && i.size === size
  );
  if (item) {
    item.count = count;
    if (item.count <= 0) removeFromCart(productId, size);
    else {
      calculateTotal();
      saveCart();
    }
  }
};

const removeFromCart = (productId: number, size?: string | null) => {
  cartItems.value = cartItems.value.filter(
    (item) => !(item.id === productId && item.size === size)
  );
  calculateTotal();
  saveCart();
};

const getCount = (productId: number, size?: string | null) => {
  const item = cartItems.value.find(
    (i) => i.id === productId && i.size === size
  );
  return item ? item.count : 0;
};

const calculateTotal = () => {
  cartTotal.value = cartItems.value.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  if (process.client) {
    localStorage.setItem(CART_TOTAL_KEY, String(cartTotal.value));
  }
};

onMounted(() => {
  if (process.client) {
    loadCart();
  }
});

export const useCart = () => ({
  cartItems,
  addToCart,
  loadCart,
  updateCount,
  removeFromCart,
  getCount,
  cartTotal,
});
