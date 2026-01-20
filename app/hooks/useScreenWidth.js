export default function useScreenWidth() {
  const screenWidth = ref(null);
  const handleResize = () => (screenWidth.value = window.innerWidth);

  onMounted(() => {
    screenWidth.value = window.innerWidth;
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return { screenWidth };
}
