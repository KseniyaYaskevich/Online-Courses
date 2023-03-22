import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const blogSwiper = new Swiper('.blog__swiper', {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  allowTouchMove: true,
  loop: false,
  grabCursor: true,

  slidesPerView: 'auto',
  spaceBetween: 30,

  pagination: {
    el: '.blog-swiper__pagination',
    clickable: true,
    bulletClass: 'blog-swiper__bullet',
    renderBullet: function (index) {
      return `<span class="blog-swiper__bullet">${(index + 1)}</span>`;
    }
  },

  navigation: {
    nextEl: '.blog-swiper__button--next',
    prevEl: '.blog-swiper__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
    },
    1270: {
      slidesPerGroup: 3,
      grid: {
        rows: 3,
      },
    },
  }
});

blogSwiper.update();
