import Scrollbar from "smooth-scrollbar";

/**
 * Create custom scroll container to fix IOS problem with
 * overflow: scroll and dynamic content
 *
 * @param {string} selector Selector of main scroll container
 * @param {string} content Content reference to find parent element by selector
 * @returns {Object}
 */
export default function useSmoothScrollbar(selector, content) {
  const scrollbar = ref(null);

  onMounted(() => {
    if (content && !content.value.closest(selector)) {
      return;
    }
    const el =
      content && content.value.closest(selector)
        ? content.value.closest(selector)
        : document.querySelector(selector);

    if (!el) {
      return;
    }

    scrollbar.value = Scrollbar.init(el, {});
  });

  onUnmounted(() => {
    if (!scrollbar.value) {
      return;
    }
    scrollbar.value.destroy();
  });

  return { scrollbar };
}
