import {getData} from './get-data';
import {setItem} from '../base/storage';

export const courseCardsHandler = () => {
  const cardsContainer = document.querySelector('.courses__list');

  const onCardsContainerClick = (evt) => {
    const card = evt.target.closest('.course-card');

    if (card) {
      const cardId = card.getAttribute('data-id');
      getData('courses').then((data) => {
        data.find((item) => {
          if (item.id === cardId) {
            setItem('course', item);
          }
        });
      });
    }
  };

  const addClickListener = (evt) => {
    if (evt.which === 1 || evt.which === 2) {
      onCardsContainerClick(evt);
    }
  };

  cardsContainer.addEventListener('click', onCardsContainerClick);
  cardsContainer.addEventListener('mousedown', addClickListener);
};
