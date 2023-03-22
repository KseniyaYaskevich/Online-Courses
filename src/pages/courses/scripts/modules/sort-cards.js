import {createCards} from './create-cards';

const sortingButtons = document.querySelectorAll('.courses-sorting__button');

export const sortCards = (array, cardsPerStep) => {
  sortingButtons.forEach((button) => {
    const type = button.id.toLowerCase();
    const cardsByType = [];
    let count = 0;

    array.forEach((card) => {
      const coursesCount = button.querySelector('.courses-sorting__count');

      if (type === 'all') {
        count = array.length;
        cardsByType.push(card);
      } else if (type === card.type.toLowerCase()) {
        count++;
        cardsByType.push(card);
      }
      coursesCount.innerHTML = `${count}`;
    });

    const onSortingButtonClick = () => {
      sortingButtons.forEach((btn) => {
        btn.classList.remove('courses-sorting__button--active');
      });

      button.classList.add('courses-sorting__button--active');
      createCards(cardsByType, cardsPerStep);
    };

    button.addEventListener('click', onSortingButtonClick);
  });
};
