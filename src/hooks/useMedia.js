import { ref, watchEffect } from "vue";

export const useMedia = (query) => {
  const matches = ref(false);

  // Создаем объект matchMedia
  const media = window.matchMedia(query);

  // Устанавливаем начальное значение
  matches.value = media.matches;

  // Используем watchEffect для постоянного отслеживания изменений
  watchEffect((onInvalidate) => {
    const onChange = () => {
      matches.value = media.matches;
    };

    // Добавляем слушатель изменения медиазапроса
    media.addEventListener("change", onChange);

    // Очистка слушателя при уничтожении компонента
    onInvalidate(() => {
      media.removeEventListener("change", onChange);
    });
  });
  return matches;
};

// const mediaLarge = useMedia("(min-width: 1520px)");