// Утилита для фиксации планшетной раскладки
export const initTabletLayoutFix = () => {
  // Проверяем если это планшет (768px - 1023px)
  const isTablet = () => {
    return window.innerWidth >= 768 && window.innerWidth <= 1023;
  };

  // Применяем стили для планшетов
  const applyTabletStyles = () => {
    if (isTablet()) {
      // Только устанавливаем флаг для CSS стилей, не блокируем скролл
      document.body.setAttribute('data-tablet-fixed', 'true');
    } else {
      document.body.removeAttribute('data-tablet-fixed');
    }
  };

  // Применяем при загрузке
  applyTabletStyles();

  // Применяем при изменении размера окна
  window.addEventListener('resize', applyTabletStyles);

  return () => {
    window.removeEventListener('resize', applyTabletStyles);
  };
};