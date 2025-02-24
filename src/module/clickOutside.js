export default {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      // Проверяем, что кликнутый элемент не является самим элементом
      // или его потомком
      if (!(el === event.target || el.contains(event.target))) {
        // Вызываем переданный метод
        binding.value(event);
      }
    };
    // Добавляем обработчик события на документ
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    // Удаляем обработчик события при уничтожении элемента
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
