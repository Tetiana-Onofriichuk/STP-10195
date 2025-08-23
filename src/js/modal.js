document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const overlay = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mmClose');
  const burgerIcon = burger.querySelector('use');

  const iconBurger = '/img/sprite.svg#icon-burger';
  const iconClose = '/img/sprite.svg#icon-close';

  function toggleMenu() {
    const isOpen = overlay.classList.toggle('is-open');
    document.body.classList.toggle('mm-lock', isOpen);

    burgerIcon.setAttribute('href', isOpen ? iconClose : iconBurger);

    burger.setAttribute('aria-expanded', isOpen);
    overlay.setAttribute('aria-hidden', !isOpen);
  }

  burger.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  overlay.querySelectorAll('.mm-link').forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('is-open');
      document.body.classList.remove('mm-lock');
      burgerIcon.setAttribute('href', iconBurger);
      burger.setAttribute('aria-expanded', false);
      overlay.setAttribute('aria-hidden', true);
    });
  });
});
