document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.js-modal-menu');
  const overlay = menu?.querySelector('.js-mm-overlay');
  const openBtn = document.querySelector('.burger.js-mm-open'); // твоя кнопка-бургер
  const closeBtn = menu?.querySelector('.js-mm-close');
  const links = menu?.querySelectorAll('.js-mm-link') || [];

  if (!menu || !overlay || !openBtn || !closeBtn) return;

  const openMenu = () => {
    menu.classList.add('is-open');
    openBtn.classList.add('is-open'); // ← бургер міняється на хрестик
    document.body.classList.add('no-scroll');
    openBtn.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
  };

  const closeMenu = () => {
    menu.classList.remove('is-open');
    openBtn.classList.remove('is-open'); // ← повертаємо бургер
    document.body.classList.remove('no-scroll');
    openBtn.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
  };

  openBtn.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  links.forEach(a => {
    a.addEventListener('click', () => {
      closeMenu();
    });
  });
});
