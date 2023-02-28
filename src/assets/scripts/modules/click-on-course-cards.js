import {getData} from './get-course-data';
import {setItem} from '../base/storage';

const cardsContainer = document.querySelector('.courses__list');

const onCardsContainerClick = (evt) => {
  const card = evt.target.closest('.course-card');

  if (card) {
    const courseId = card.getAttribute('data-id');
    getData().then((data) => {
      data.find((item) => {
        if (item.id === courseId) {
          setItem('course', item);
        }
      });
    });
  }
};

cardsContainer.addEventListener('click', onCardsContainerClick);
