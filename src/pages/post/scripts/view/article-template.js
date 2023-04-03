export const createArticleTemplate = (item) =>
  `<div class="article__inner">
    <span class="article__type">
        <svg width="16" height="16">
            <use xlink:href="./assets/images/sprite.svg#${item.type.toLowerCase()}"></use>
        </svg>
        ${item.type}
    </span>
    <span class="article__category">${item.category}</span>
    </div>
    <h1 class="article__title section-heading__title">${item.title}
    </h1>
    <div class="article__inner article__inner--space-between">
        <div class="article__details details">
            <span class="details__item">
                <svg width="15" height="15">
                    <use xlink:href="assets/images/sprite.svg#calendar"></use>
                </svg>
                <time datetime="2023-09-04">${item.date}</time>
            </span>
            <span class="details__item">
                <svg width="15" height="15">
                    <use xlink:href="assets/images/sprite.svg#clock"></use>
                </svg>
                <time datetime="PTH0M${item.duration}S">36 min</time>
            </span>
        </div>
        <div class="article__sharing sharing">
        <p class="sharing__title">Share:</p>
            <ul class="sharing__list">
                <li class="sharing__item">
                <a class="sharing__link" href="https://facebook.com/" aria-label="Facebook" target="_blank">
                    <svg class="sharing__icon" width="10" height="18">
                    <use xlink:href="assets/images/sprite.svg#facebook"></use>
                    </svg>
                </a>
                </li>
                <li class="sharing__item">
                <a class="sharing__link" href="https://twitter.com/" aria-label="twitter" target="_blank">
                    <svg class="sharing__icon" width="18" height="14">
                    <use xlink:href="assets/images/sprite.svg#twitter"></use>
                    </svg>
                </a>
                </li>
                <li class="sharing__item">
                <a class="sharing__link" href="https://linkedin.com/" aria-label="Linked In" target="_blank">
                    <svg class="sharing__icon" width="17" height="17">
                    <use xlink:href="assets/images/sprite.svg#linked"></use>
                    </svg>
                </a>
                </li>
            </ul>
        </div>
    </div>
    <img class="article__img" src="assets/images/blog/blog-${item.id}.jpg" alt="Face made up of different elements"
    width="390" height="300">
    <h2 class="article__subtitle">${item.description}
    </h2>
    <p class="article__text">${item.text}</p>
    <p class="article__text">${item.text}</p>
    <div class="article__quotation quotation">
        <img class="quotation__braces" src="assets/images/braces.svg" alt="Braces" width="28"
        height="20">
        <blockquote class="quotation__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus
        lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis
        quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas
        diam integer in.
        </blockquote>
    </div>
    <div class="article__content content">
        <p class="content__title">Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis.
        Vitae mus blandit in neque amet non fringilla blandit:</p>
        <ul class="content__list bulleted-list">
            <li class="content__item bulleted-list__item">A fermentum in morbi pretium aliquam adipiscing donec
                tempus.</li>
            <li class="content__item bulleted-list__item">Vulputate placerat amet pulvinar lorem nisl.</li>
            <li class="content__item bulleted-list__item">Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.</li>
            <li class="content__item bulleted-list__item">Etiam duis lobortis in fames ultrices commodo nibh.</li>
        </ul>
    </div>
    <p class="article__text">${item.text}</p>
    <div class="article__inner article__inner--space-between">
        <div class="article__tags tags">
            <p class="tags__title">Tags:</p>
            <ul class="tags__list">
                <li class="tags__item">
                #${item.tags[0]}
                </li>
                <li class="tags__item">
                #${item.tags[1]}
                </li>
                <li class="tags__item">
                #${item.tags[2]}
                </li>
            </ul>
        </div>
        <div class="article__sharing sharing">
            <p class="sharing__title">Share:</p>
            <ul class="sharing__list">
                <li class="sharing__item">
                <a class="sharing__link" href="https://facebook.com/" aria-label="Facebook" target="_blank">
                    <svg class="sharing__icon" width="10" height="18">
                    <use xlink:href="assets/images/sprite.svg#facebook"></use>
                    </svg>
                </a>
                </li>
                <li class="sharing__item">
                <a class="sharing__link" href="https://twitter.com/" aria-label="twitter" target="_blank">
                    <svg class="sharing__icon" width="18" height="14">
                    <use xlink:href="assets/images/sprite.svg#twitter"></use>
                    </svg>
                </a>
                </li>
                <li class="sharing__item">
                <a class="sharing__link" href="https://linkedin.com/" aria-label="Linked In" target="_blank">
                    <svg class="sharing__icon" width="17" height="17">
                    <use xlink:href="assets/images/sprite.svg#linked"></use>
                    </svg>
                </a>
                </li>
            </ul>
        </div>
    </div>`;
