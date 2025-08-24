const scrollBtn = document.getElementById('scrollup');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    // показати після 300px
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // плавний скрол
  });
});
