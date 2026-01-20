export default function useScrollToTop() {
  const isScrolling = ref(false);

  const scrollToTop = () => {
    isScrolling.value = true;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      // Сброс состояния после завершения скроллинга
      isScrolling.value = false;
    }, 300);
  };

  return { scrollToTop };
}