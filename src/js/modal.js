const observer = new MutationObserver(() => {
  const burger = document.querySelector('.burger');
  const modalMenu = document.querySelector('.modal-menu');
  const overlay = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mmClose');

  if (!burger || !modalMenu || !overlay || !closeBtn) return;

  const links = overlay.querySelectorAll('.mm-link');

  function openMenu() {
    modalMenu.classList.add('is-open');
    overlay.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('mm-lock');
  }

  function closeMenu() {
    modalMenu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mm-lock');
  }

  burger.addEventListener('click', () => {
    const isOpen = modalMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));

  observer.disconnect(); // більше не потрібно слідкувати
});

// Слідкуємо за вставленням елементів у body
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
