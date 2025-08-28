document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.hero-picture .hero-img');
  if (!img) return;

  const reveal = () => img.classList.add('js-visible');

  if (img.complete) {
    img.decode ? img.decode().then(reveal).catch(reveal) : reveal();
  } else {
    img.addEventListener('load', reveal, { once: true });
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          reveal();
          obs.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  io.observe(img);
});
