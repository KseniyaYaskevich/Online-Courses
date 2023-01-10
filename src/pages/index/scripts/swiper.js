import Swiper, {Navigation,Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const teamSwiper = new Swiper('.team__swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.team__button-next',
    prevEl: '.team__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1270: {
      slidesPerView: 4,
    },
  },
});

const testimonialsSwiper = new Swiper('.testimonials__swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.testimonials__button-next',
    prevEl: '.testimonials__button-prev',
  },
  pagination: {
    el: '.testimonials__pagination',
    clickable: true,
  },
});

teamSwiper.update();
testimonialsSwiper.update();
