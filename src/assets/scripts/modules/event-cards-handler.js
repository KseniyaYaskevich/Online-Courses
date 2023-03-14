import {getData} from './get-data';
import {setItem} from '../base/storage';

export const eventCardsHandler = () => {
  const cardsContainer = document.querySelector('.events__list');

  const onCardsContainerClick = (evt) => {
    if (evt.target.classList.contains('event-card__button')) {

      const card = evt.target.closest('.event-card');
      const cardId = card.getAttribute('data-id');

      getData('events').then((data) => {
        data.find((item) => {
          if (item.id === cardId) {
            setItem('event', item);
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
