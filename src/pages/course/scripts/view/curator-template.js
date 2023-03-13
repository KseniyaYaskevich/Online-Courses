export const createCuratorTemplate = (item) => `
<div class="curator__image-wrapper">
  <picture>
    <source srcset="/assets/images/curator-${item.id}.webp" type="image/webp">
    <img class="curator__image" src="/assets/images/curator-${item.id}.png"
    alt="Photo of curator ${item.curator}" width="458" height="600">
  </picture>
</div>
<div class="curator__content">
<div class="curator__heading section-heading">
  <p class="curator__subtitle section-heading__subtitle">Course curator</p>
  <h2 class="curator__title section-heading__title">${item.curator}</h2>
  <p class="curator__profession">${item.profession}</p>
</div>
<ul class="curator__statistics statistics-curator">
  <li class="statistics-curator__item">
    <svg class="statistics-curator__icon" width="16" height="16">
      <use xlink:href="./assets/images/sprite.svg#star"></use>
    </svg>
    ${item.rating} rate
  </li>
  <li class="statistics-curator__item">
    <svg class="statistics-curator__icon" width="16" height="16">
      <use xlink:href="./assets/images/sprite.svg#video"></use>
    </svg>
    ${item.leadCourse} courses
  </li>
  <li class="statistics-curator__item">
    <svg class="statistics-curator__icon" width="16" height="16">
      <use xlink:href="./assets/images/sprite.svg#person"></use>
    </svg>
    ${item.releaseStudents} students
  </li>
</ul>
<p class="curator__desc">${item.aboutCurator}</p>
<ul class="curator__socials socials-curator">
  <li class="socials-curator__item">
    <a class="socials-curator__link" href="https://facebook.com/" aria-label="Facebook" target="_blank">
      <svg class="socials-curator__icon" width="24" height="24">
        <use xlink:href="./assets/images/sprite.svg#facebook"></use>
      </svg>
    </a>
  </li>
  <li class="socials-curator__item">
    <a class="socials-curator__link" href="https://instagram.com/" aria-label="Instagram" target="_blank">
      <svg class="socials-curator__icon" width="24" height="24">
        <use xlink:href="./assets/images/sprite.svg#instagram"></use>
      </svg>
    </a>
  </li>
  <li class="socials-curator__item">
    <a class="socials-curator__link" href="https://twitter.com/" aria-label="twitter" target="_blank">
      <svg class="socials-curator__icon" width="24" height="24">
        <use xlink:href="./assets/images/sprite.svg#twitter"></use>
      </svg>
    </a>
  </li>
  <li class="socials-curator__item">
    <a class="socials-curator__link" href="https://linkedin.com/" aria-label="Linked In" target="_blank">
      <svg class="socials-curator__icon" width="24" height="24">
        <use xlink:href="./assets/images/sprite.svg#linked"></use>
      </svg>
    </a>
  </li>
</ul>
</div>`;
