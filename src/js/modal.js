document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.js-mm-open');
  const modal = document.querySelector('.js-modal-menu');
  const overlay = modal?.querySelector('.js-mm-overlay');
  const closeBtn = modal?.querySelector('.js-mm-close');
  const links = modal?.querySelectorAll('.js-mm-link') || [];

  const openMenu = () => {
    modal.classList.add('js-is-open');
    burger.classList.add('js-is-open');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('js-no-scroll');
  };

  const closeMenu = () => {
    modal.classList.remove('js-is-open');
    burger.classList.remove('js-is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  burger.addEventListener('click', () => {
    modal.classList.contains('js-is-open') ? closeMenu() : openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);

  overlay?.addEventListener('click', e => {
    if (e.target === overlay) closeMenu();
  });

  links.forEach(a => a.addEventListener('click', closeMenu));
});
