import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Navigation, Keyboard, Pagination } from 'swiper/modules';

const swiper = new Swiper('.gallery-swiper', {
  loop: false,
  speed: 600,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 20,
  modules: [Navigation, Keyboard, Pagination],
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  pagination: {
    el: '.gallery-pagination',
    clickable: true,
  },

  on: {
    init: function () {
      updateNavButtons(this);
    },
    slideChange: function () {
      updateNavButtons(this);
    },
  },
});

function updateNavButtons(swiperIns) {
  const prevBut = document.querySelector('.swiper-btn-prev');
  const nextBut = document.querySelector('.swiper-btn-next');
  if (swiperIns.isBeginning) {
    prevBut.classList.add('button-dis');
  } else {
    prevBut.classList.remove('button-dis');
  }

  if (swiperIns.isEnd) {
    nextBut.classList.add('button-dis');
  } else {
    nextBut.classList.remove('button-dis');
  }
}
