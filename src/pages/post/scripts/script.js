import 'scripts/script';
import './modules/swiper-blog';

import {loadData} from './modules/load-data';
import {blogCardsHandler} from 'scripts/modules/blog-cards-handler';
import {createPostPageTemplate} from './view/post-page-template';
import {getItem} from 'scripts/base/storage';

const CARDS_NUMBER = 8;

loadData(CARDS_NUMBER);
blogCardsHandler();

window.addEventListener('load', () => {
  createPostPageTemplate(getItem('post'));
});
