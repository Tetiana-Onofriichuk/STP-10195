const items = document.querySelectorAll('.features-items');

const isDesktop = matchMedia('(min-width:1200px)').matches;

const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: isDesktop ? 0.3 : 0.15, rootMargin: '0px 0px -10% 0px' }
);

items.forEach(el => io.observe(el));
