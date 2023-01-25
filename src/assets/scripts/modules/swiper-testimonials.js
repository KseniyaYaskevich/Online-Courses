import Swiper, {Navigation,Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

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

testimonialsSwiper.update();
