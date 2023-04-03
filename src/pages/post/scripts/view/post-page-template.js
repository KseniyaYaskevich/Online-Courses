import {render} from 'scripts/modules/utils';
import {createArticleTemplate} from './article-template';
import {createAuthorTemplate} from './author-template';

export const createPostPageTemplate = (item) => {
  const articleSection = document.querySelector('.article');
  const authorSection = document.querySelector('.author');
  const sidebarTagsList = document.querySelector('.tags-sidebar__list');

  render(articleSection, createArticleTemplate(item));
  render(authorSection, createAuthorTemplate(item));

  sidebarTagsList.innerHTML = '';
  item.tags.forEach((tag) => {
    render(sidebarTagsList, `
    <li class="tags-sidebar__item">
      <a class="tags-sidebar__link" href="blog.html">#${tag}</a>
    </li>`);
  });
};
