import Swiper, {Navigation} from 'swiper';
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

teamSwiper.update();
