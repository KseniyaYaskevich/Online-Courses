import {getData} from '../base/get-data';
import {setItem} from '../base/storage';

export const blogCardsHandler = () => {
  const cardsContainer = document.querySelector('.blog__list');

  const onCardsContainerClick = (evt) => {
    if (evt.target.classList.contains('blog-card__link')) {

      const card = evt.target.closest('.blog-card');
      const cardId = card.getAttribute('data-id');

      getData('blog').then((data) => {
        data.find((item) => {
          if (item.id === cardId) {
            setItem('post', item);
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
