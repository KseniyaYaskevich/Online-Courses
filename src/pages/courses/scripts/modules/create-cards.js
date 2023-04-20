import {render} from 'scripts/base/utils';
import {createCourseTemplate} from 'scripts/view/course-template';
import {createLoadButtonTemplate} from '../view/load-button-template';

const cardsWrapper = document.querySelector('.courses__list');

export const createCards = (array, cardsPerStep) => {
  cardsWrapper.innerHTML = '';

  if (document.querySelector('#load-more')) {
    document.querySelector('#load-more').remove();
  }

  if (array.length > cardsPerStep) {
    render(cardsWrapper, createLoadButtonTemplate(),'afterend');
    const buttonLoadMore = document.querySelector('#load-more');

    for (let index = 0; index < cardsPerStep; index++) {
      render(cardsWrapper, createCourseTemplate(array[index], 'vertical'));
    }

    let renderedCardCount = cardsPerStep;

    const onLoadMoreButtonClick = () => {
      array.slice(renderedCardCount, renderedCardCount += cardsPerStep).forEach((card) => {
        render(cardsWrapper, createCourseTemplate(card, 'vertical'));
      });

      if (renderedCardCount >= array.length) {
        buttonLoadMore.removeEventListener('click', onLoadMoreButtonClick);
        buttonLoadMore.remove();
      }
    };

    buttonLoadMore.addEventListener('click', onLoadMoreButtonClick);

  } else {
    array.forEach((item) =>
      render(cardsWrapper, createCourseTemplate(item, 'vertical')));
  }
};
