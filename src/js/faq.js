const boxes = Array.from(document.querySelectorAll(".js-box"))

boxes.forEach((box) => {
  const trigger = box.querySelector(".js-trigger")
  const content = box.querySelector(".js-content")
  
  trigger.addEventListener("click", (e) => {
    boxes.forEach(b => {
      if (b !== box) {
        b.classList.remove("active");
        b.querySelector(".js-content").classList.remove("open");
      }
    });
    e.preventDefault()
    box.classList.toggle("active")
    content.classList.toggle("open")
  })
})