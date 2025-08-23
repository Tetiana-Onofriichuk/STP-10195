document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.js-mm-open');
  const modal = document.querySelector('.modal-menu');
  const overlay = modal?.querySelector('.mm-overlay');
  const closeBtn = modal?.querySelector('.mm-close');
  const links = modal?.querySelectorAll('.mm-link') || [];

  const openMenu = () => {
    modal.classList.add('is-open');
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    modal.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  burger.addEventListener('click', () => {
    modal.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);

  overlay?.addEventListener('click', e => {
    if (e.target === overlay) closeMenu();
  });

  links.forEach(a => a.addEventListener('click', closeMenu));
});
