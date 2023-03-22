export const createEventTemplate = ({
  id,
  day,
  month,
  time,
  title,
  type
}, swiperSlide = '') => `
<li class="events__item event-card${swiperSlide ? ` ${swiperSlide}` : ''}" data-id="${id}">
  <div class="event-card__data">
    <p class="event-card__day">${day}</p>
    <p class="event-card__month">${month}</p>
    <time class="event-card__time">${time}</time>
  </div>
  <p class="event-card__info">
    ${title}
    <span class="event-card__desc">${type}</span>
  </p>
  <a class="event-card__button button button--size-regular button--color-transparent" href="event.html" target="_blank">
    View more
  </a>
</li>`;
