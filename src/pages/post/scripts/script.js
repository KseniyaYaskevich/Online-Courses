import 'scripts/script';
import './modules/swiper-blog';

import {createPostPageTemplate} from './view/post-page-template';
import {blogCardsHandler} from 'scripts/modules/blog-cards-handler';
import {getItem} from 'scripts/base/storage';
import {loadData} from './modules/load-data';

const CARDS_NUMBER = 8;

loadData(CARDS_NUMBER);
blogCardsHandler();

window.addEventListener('load', () => {
  createPostPageTemplate(getItem('post'));
});
