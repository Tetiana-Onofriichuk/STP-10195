const scrollBtn = document.getElementById('js-scrollup');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('js-show');
  } else {
    scrollBtn.classList.remove('js-show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
