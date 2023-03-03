export const createCourseTemplate = ({
  id,
  type,
  specification,
  title,
  price,
  curator
}, view, swiperSlide = '') => `
<li class="courses__item${swiperSlide ? ` ${swiperSlide}` : ''}">
  <a class="courses__link course-card course-card--${view}" href="course.html" data-id="${id}" target="_blank">
    <picture>
      <source srcset="./assets/images/speakers/speaker-${id}.webp" type="image/webp">
      <img class="course-card__photo" src="./assets/images/speakers/speaker-${id}.jpg"
      alt="Photo of speaker ${curator}">
    </picture>
    <div class="course-card__content">
        <p class="course-direction course-direction--${type.toLowerCase()}">${specification}</p>
        <h3 class="course-card__title">${title}</h3>
        <span class="course-card__price">$${price}</span>
        <span class="course-card__author">| by ${curator}</span>
    </div>
  </a>
</li>`;
