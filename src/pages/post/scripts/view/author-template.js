export const createAuthorTemplate = (item) =>
  `<h2 class="sidebar__title">Author</h2>
  <div class="author__wrapper">
    <div class="author__image-wrapper">
      <picture>
        <source srcset="assets/images/curator-${item.id}.webp" type="image/webp">
        <img class="author__image" src="assets/images/curator-${item.id}.png"
          alt="Photo of author {item.curator}" width="100" height="100">
      </picture>
    </div>
    <div class="author__content">
      <h3 class="author__subtitle">${item.curator}</h3>
      <p class="author__profession">${item.profession}</p>
      <ul class="author__socials socials-author">
        <li class="socials-author__item">
          <a class="socials-author__link" href="https://instagram.com/" aria-label="Instagram"
            target="_blank">
            <svg class="socials-author__icon" width="17" height="17">
              <use xlink:href="assets/images/sprite.svg#instagram"></use>
            </svg>
          </a>
        </li>
        <li class="socials-author__item">
          <a class="socials-author__link" href="https://twitter.com/" aria-label="twitter" target="_blank">
            <svg class="socials-author__icon" width="18" height="14">
              <use xlink:href="assets/images/sprite.svg#twitter"></use>
            </svg>
          </a>
        </li>
        <li class="socials-author__item">
          <a class="socials-author__link" href="https://linkedin.com/" aria-label="Linked In" target="_blank">
            <svg class="socials-author__icon" width="17" height="17">
              <use xlink:href="assets/images/sprite.svg#linked"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>`;
