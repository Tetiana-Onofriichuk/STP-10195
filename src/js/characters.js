document.addEventListener('DOMContentLoaded', () => {
  const cards = [...document.querySelectorAll('.characters-card.reveal')];

  cards.forEach((card, i) => {
    card.classList.add(i % 2 === 0 ? 'from-left' : 'from-right');
  });

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  );

  cards.forEach(c => io.observe(c));
});
