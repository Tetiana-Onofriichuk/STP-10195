document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.js-modal-menu');
  const overlay = menu?.querySelector('.js-mm-overlay');
  const openBtn = document.querySelector('.js-burger.js-mm-open');
  const closeBtn = menu?.querySelector('.js-mm-close');
  const links = menu?.querySelectorAll('.js-mm-link') || [];

  if (!menu || !overlay || !openBtn || !closeBtn) return;

  const openMenu = () => {
    menu.classList.add('js-is-open');
    openBtn.classList.add('js-is-open');
    document.body.classList.add('js-no-scroll');
    openBtn.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
  };

  const closeMenu = () => {
    menu.classList.remove('js-is-open');
    openBtn.classList.remove('js-is-open');
    document.body.classList.remove('js-no-scroll');
    openBtn.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
  };

  openBtn.addEventListener('click', () => {
    if (menu.classList.contains('js-is-open')) {
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
