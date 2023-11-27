import 'scripts/script';
import 'scripts/modules/swiper-testimonials';

import './modules/benefits-tabs';
import './modules/swiper-team';

import {loadData} from './modules/load-data';
import {courseCardsHandler} from 'scripts/modules/course-cards-handler';
import {eventCardsHandler} from 'scripts/modules/event-cards-handler';
import {blogCardsHandler} from 'scripts/modules/blog-cards-handler';
import {videoPlayer} from 'scripts/modules/video-player';

const COURSE_CARDS_NUMBER = 6;
const EVENT_CARDS_NUMBER = 3;
const BLOG_CARDS_NUMBER = 3;

loadData(COURSE_CARDS_NUMBER, 'courses');
loadData(EVENT_CARDS_NUMBER, 'events');
loadData(BLOG_CARDS_NUMBER, 'blog');

courseCardsHandler();
eventCardsHandler();
blogCardsHandler();

videoPlayer();
