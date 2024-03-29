import {getData} from 'scripts/base/get-data';
import {getItems} from 'scripts/base/utils';
import {render} from 'scripts/base/utils';
import {createCourseTemplate} from 'scripts/view/course-template';

const cardsWrapper = document.querySelector('.courses__list');

export const loadData = (cardsNumber) => {
  getData('courses').then((data) => {
    const cards = getItems(data, cardsNumber);

    cards.forEach((item) => {
      render(cardsWrapper, createCourseTemplate(item, 'horizontal', 'swiper-slide'));
    });
  });
};
