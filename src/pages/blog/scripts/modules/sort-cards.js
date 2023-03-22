import {render} from 'scripts/modules/utils';
import {createBlogItemTemplate} from 'scripts/view/blog-item-template';

const sortingButtons = document.querySelectorAll('.blog-sorting__button');
const cardsWrapper = document.querySelector('.blog__list');

export const sortCards = (array) => {

  sortingButtons.forEach((button) => {
    const type = button.id.toLowerCase();
    const cardsByType = [];

    array.forEach((card) => {
      if (type === 'all') {
        cardsByType.push(card);
      } else if (type === card.type.toLowerCase()) {
        cardsByType.push(card);
      }
    });

    const onSortingButtonClick = () => {
      cardsWrapper.innerHTML = '';

      sortingButtons.forEach((btn) => {
        btn.classList.remove('blog-sorting__button--active');
      });

      button.classList.add('blog-sorting__button--active');

      cardsByType.forEach((card) =>
        render(cardsWrapper, createBlogItemTemplate(card, 'swiper-slide')));
    };

    button.addEventListener('click', onSortingButtonClick);
  });
};
