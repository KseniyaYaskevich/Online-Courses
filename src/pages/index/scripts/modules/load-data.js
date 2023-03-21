import {getData} from 'scripts/modules/get-data';
import {getItems} from 'scripts/modules/utils';
import {render} from 'scripts/modules/utils';
import {createCourseTemplate} from 'scripts/view/course-template';
import {createEventTemplate} from 'scripts/view/event-template';

const cardsWrapper = document.querySelector('.courses__list');

export const loadData = (cardsNumber) => {
  getData('courses').then((data) => {
    const cards = getItems(data, cardsNumber);

    cards.forEach((item) => {
      render(cardsWrapper, createCourseTemplate(item, 'horizontal'));
    });
  });
};
