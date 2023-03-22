/* eslint-disable no-nested-ternary */
export const createBlogItemTemplate = ({
  id,
  type,
  category,
  date,
  duration,
  title,
  description
}, swiperSlide = '') => `
<li class="blog__item blog-card${swiperSlide ? ` ${swiperSlide}` : ''}" data-id="${id}">
  <div class="blog-card__img-wrapper">
    <img class="blog-card__img" src="assets/images/blog/blog-${id}.jpg"
      alt="Face made up of different elements" width="390" height="300">
    <span class="blog-card__type">
      <svg width="15" height="15">
        <use xlink:href="assets/images/sprite.svg#${type.toLowerCase()}"></use>
      </svg>
      ${type}
    </span>
  </div>
  <div class="blog-card__content">
    <ul class="blog-card__list">
      <li class="blog-card__item">${category}</li>
      <li class="blog-card__item">
        <svg width="15" height="15">
          <use xlink:href="assets/images/sprite.svg#calendar"></use>
        </svg>
        <time datetime="2023-09-04">${date}</time>
      </li>
      ${duration ? `
      <li class="blog-card__item">
        <svg width="15" height="15">
          <use xlink:href="assets/images/sprite.svg#clock"></use>
        </svg>
        <time datetime="PTH0M{duration}S">${duration} min</time>
      </li>` : ''}
    </ul>
    <h3 class="blog-card__title">${title}</h3>
    <p class="blog-card__desc">${description}</p>
    <a class="blog-card__link" href="post.html">
    ${type.toLowerCase() === 'podcast' ? 'Listen' : type.toLowerCase() === 'article' ? 'Read' : 'Watch'}
      <svg width="18" height="11">
        <use xlink:href="assets/images/sprite.svg#arrow"></use>
      </svg>
    </a>
  </div>
</li>`;
