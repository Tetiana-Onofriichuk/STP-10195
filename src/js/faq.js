const boxes = Array.from(document.querySelectorAll('.js-box'));

boxes.forEach(box => {
  const trigger = box.querySelector('.js-trigger');
  const content = box.querySelector('.js-content');

  trigger.addEventListener('click', e => {
    boxes.forEach(b => {
      if (b !== box) {
        b.classList.remove('js-active');
        b.querySelector('.js-content').classList.remove('js-open');
      }
    });
    e.preventDefault();
    box.classList.toggle('js-active');
    content.classList.toggle('js-open');
  });
});
