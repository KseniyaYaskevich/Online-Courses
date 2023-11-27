(()=>{var e,t={112:(e,t,s)=>{"use strict";const r=e=>{let t=e.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]');t=Array.prototype.slice.call(t);const s=t[0],r=t[t.length-1];s.focus(),e.addEventListener("keydown",(e=>{9===e.keyCode&&(e.shiftKey?document.activeElement===s&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),s.focus()))}))};(()=>{const e=document.querySelector(".page__body"),t=e.querySelector(".navbar__menu");let s;e.querySelector(".menu__toggle").addEventListener("click",(()=>{e.classList.toggle("page__body--lock"),t.classList.toggle("is-opened"),t.classList.contains("is-opened")&&(s=document.activeElement,r(t),t.addEventListener("keydown",(r=>{27!==r.keyCode&&"Escape"!==r.key&&"Esc"!==r.key||(e.classList.remove("page__body--lock"),t.classList.remove("is-opened"),s.focus())})))}))})(),(()=>{const e=document.querySelector(".page__body"),t=e.querySelector(".account__login"),s=e.querySelector(".account__register"),a=e.querySelectorAll(".modal__close");let o;const n=()=>{if(document.querySelector(".modal-video")){const e=document.querySelector(".modal-video");if(e.classList.contains("modal--visible")){const t=e.querySelector(".modal-video__viewer"),s=e.querySelector(".controls__button--play svg use"),r="assets/images/sprite.svg";t.play&&(t.pause(),s.setAttribute("xlink:href",`${r}#play`))}}document.querySelector(".modal--visible")&&(e.classList.remove("page__body--lock"),document.querySelector(".modal--visible").classList.remove("modal--visible"),document.querySelector(".modal-wrapper--visible").classList.remove("modal-wrapper--visible"),o.focus())},i=t=>{const s=t.target.dataset.name,a=e.querySelector(`.${s}`),i=a.closest(".modal-wrapper");o=document.activeElement,e.classList.add("page__body--lock"),a.classList.add("modal--visible"),i.classList.add("modal-wrapper--visible"),r(a),a.addEventListener("keydown",(e=>{27!==e.keyCode&&"Escape"!==e.key&&"Esc"!==e.key||n()})),i.addEventListener("click",(e=>{e.target.classList.contains("modal-wrapper")&&n()}))};t.addEventListener("click",i),s.addEventListener("click",i),e.querySelector(".play-button")&&e.querySelector(".play-button").addEventListener("click",i),a.forEach((e=>e.addEventListener("click",n)))})(),document.querySelectorAll(".animated-control__label").forEach((e=>{e.innerHTML=e.innerText.split("").map(((e,t)=>`<span style="transition-delay:${30*t}ms">${e}</span>`)).join("")})),document.querySelector("#button-to-top").addEventListener("click",(()=>{window.scrollBy({top:-document.documentElement.scrollHeight,behavior:"smooth"})})),(()=>{const e=document.querySelectorAll(".form-modal__show-password"),t=document.querySelectorAll('input[type="password"]'),s=document.querySelectorAll(".form-modal__show-password svg use"),r="assets/images/sprite.svg";e.forEach(((e,a)=>{e.addEventListener("click",(()=>{"password"===t[a].getAttribute("type")?(t[a].setAttribute("type","text"),s[a].setAttribute("xlink:href",`${r}#closedEye`)):(t[a].setAttribute("type","password"),s[a].setAttribute("xlink:href",`${r}#eye`))}))}))})();var a=s(809);new a.ZP(".testimonials__swiper",{modules:[a.W_,a.tl],direction:"horizontal",slidesPerView:1,loop:!0,grabCursor:!0,navigation:{nextEl:".testimonials__button-next",prevEl:".testimonials__button-prev"},pagination:{el:".testimonials__pagination",clickable:!0}}).update(),s(715),new a.ZP(".courses__swiper",{modules:[a.W_,a.tl],direction:"horizontal",slidesPerView:2,spaceBetween:30,loop:!0,grabCursor:!0,navigation:{nextEl:".courses__button-next",prevEl:".courses__button-prev"},breakpoints:{320:{slidesPerView:1},1270:{slidesPerView:2}}}).update();const o=async e=>{const t=await fetch(`assets/json/${e}.json`);if(t.ok)return t.json();throw new Error(`Data not received, error ${t.status} ${t.statusText}`)},n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return Math.random()*(t-e)+e},i=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";e.insertAdjacentHTML(s,t)},c=document.querySelector(".courses__list");o("courses").then((e=>{const t=((e,t)=>{const s=e,r=[];for(let t=0;t<6;t++){const t=Math.floor(n(0,e.length));r.push(s[t])}return r})(e);t.forEach((e=>{i(c,function(e,t){let{id:s,type:r,specification:a,title:o,price:n,curator:i}=e,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return`\n<li class="courses__item${c?` ${c}`:""}">\n  <a class="courses__link course-card course-card--${t}" href="course.html" data-id="${s}" target="_blank">\n    <picture>\n      <source srcset="./assets/images/speakers/speaker-${s}.webp" type="image/webp">\n      <img class="course-card__photo" src="./assets/images/speakers/speaker-${s}.jpg"\n      alt="Photo of speaker ${i}">\n    </picture>\n    <div class="course-card__content">\n        <p class="course-direction course-direction--${r.toLowerCase()}">${a}</p>\n        <h3 class="course-card__title">${o}</h3>\n        <span class="course-card__price">$${n}</span>\n        <span class="course-card__author">| by ${i}</span>\n    </div>\n  </a>\n</li>`}(e,"horizontal","swiper-slide"))}))})),(()=>{const e=document.querySelector(".courses__list"),t=e=>{const t=e.target.closest(".course-card");if(t){const e=t.getAttribute("data-id");o("courses").then((t=>{t.find((t=>{var s;t.id===e&&("course",s=t,localStorage.setItem("course",JSON.stringify(s)))}))}))}};e.addEventListener("click",t),e.addEventListener("mousedown",(e=>{1!==e.which&&2!==e.which||t(e)}))})(),(()=>{const e=document.querySelectorAll(".spoller__button"),t=document.querySelectorAll(".spoller__text");e.forEach(((s,r)=>{s.addEventListener("click",(()=>{t[r].classList.toggle("spoller__text--active"),e[r].classList.toggle("spoller__button--active")}))}))})(),window.addEventListener("load",(()=>{(e=>{const t=document.querySelector(".page-header__title"),s=document.querySelector(".about__desc"),r=document.querySelector(".about__list"),a=document.querySelector(".about__event"),o=document.querySelector(".curator .container");t.innerHTML=e.title,s.innerHTML=e.description,e.themes.forEach((e=>{i(r,`<li class="about__item bulleted-list__item">${e}</li>`)})),i(a,(e=>`\n<ul class="event-sidebar__list">\n    <li class="event-sidebar__item">\n        <h4 class="event-sidebar__title">Dates</h4>\n        <p class="event-sidebar__details">${e.dates}</p>\n        <p class="event-sidebar__desc">Metus turpis sit lorem lacus, in elit tellus lacus.</p>\n    </li>\n    <li class="event-sidebar__item">\n        <h4 class="event-sidebar__title">Duration</h4>\n        <p class="event-sidebar__details">${e.duration}</p>\n        <p class="event-sidebar__desc">Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>\n    </li>\n    <li class="event-sidebar__item">\n        <h4 class="event-sidebar__title">Price</h4>\n        <p class="event-sidebar__details">$${e.monthPrice} per month</p>\n        <p class="event-sidebar__desc">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit\n            tristique dis.</p>\n    </li>\n</ul>\n<button class="button button--size-regular button--color-gradient event-sidebar__button" type="button">\n    Join the course\n</button>\n`)(e)),i(o,(e=>`\n<div class="curator__image-wrapper">\n  <picture>\n    <source srcset="/assets/images/curator-${e.id}.webp" type="image/webp">\n    <img class="curator__image" src="/assets/images/curator-${e.id}.png"\n    alt="Photo of curator ${e.curator}" width="458" height="600">\n  </picture>\n</div>\n<div class="curator__content">\n<div class="curator__heading section-heading">\n  <p class="curator__subtitle section-heading__subtitle">Course curator</p>\n  <h2 class="curator__title section-heading__title">${e.curator}</h2>\n  <p class="curator__profession">${e.profession}</p>\n</div>\n<ul class="curator__statistics statistics-curator">\n  <li class="statistics-curator__item">\n    <svg class="statistics-curator__icon" width="16" height="16">\n      <use xlink:href="./assets/images/sprite.svg#star"></use>\n    </svg>\n    ${e.rating} rate\n  </li>\n  <li class="statistics-curator__item">\n    <svg class="statistics-curator__icon" width="16" height="16">\n      <use xlink:href="./assets/images/sprite.svg#video"></use>\n    </svg>\n    ${e.leadCourse} courses\n  </li>\n  <li class="statistics-curator__item">\n    <svg class="statistics-curator__icon" width="16" height="16">\n      <use xlink:href="./assets/images/sprite.svg#person"></use>\n    </svg>\n    ${e.releaseStudents} students\n  </li>\n</ul>\n<p class="curator__desc">${e.aboutCurator}</p>\n<ul class="curator__socials socials-curator">\n  <li class="socials-curator__item">\n    <a class="socials-curator__link" href="https://facebook.com/" aria-label="Facebook" target="_blank">\n      <svg class="socials-curator__icon" width="24" height="24">\n        <use xlink:href="./assets/images/sprite.svg#facebook"></use>\n      </svg>\n    </a>\n  </li>\n  <li class="socials-curator__item">\n    <a class="socials-curator__link" href="https://instagram.com/" aria-label="Instagram" target="_blank">\n      <svg class="socials-curator__icon" width="24" height="24">\n        <use xlink:href="./assets/images/sprite.svg#instagram"></use>\n      </svg>\n    </a>\n  </li>\n  <li class="socials-curator__item">\n    <a class="socials-curator__link" href="https://twitter.com/" aria-label="twitter" target="_blank">\n      <svg class="socials-curator__icon" width="24" height="24">\n        <use xlink:href="./assets/images/sprite.svg#twitter"></use>\n      </svg>\n    </a>\n  </li>\n  <li class="socials-curator__item">\n    <a class="socials-curator__link" href="https://linkedin.com/" aria-label="Linked In" target="_blank">\n      <svg class="socials-curator__icon" width="24" height="24">\n        <use xlink:href="./assets/images/sprite.svg#linked"></use>\n      </svg>\n    </a>\n  </li>\n</ul>\n</div>`)(e))})((e=>{const t=JSON?.parse(localStorage.getItem("course"));return t??""})())}))},715:()=>{(e=>{const t=document.querySelector("#countdown"),s=t.querySelector("#countdown-days"),r=t.querySelector("#countdown-hours"),a=t.querySelector("#countdown-minutes"),o=t.querySelector("#countdown-seconds"),n=()=>{const t=(e=>{const t=Date.parse(e)-Date.parse(new Date),s=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60),a=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:a,minutes:r,seconds:s}})(e);s.innerHTML=`0${t.days}`.slice(-2),r.innerHTML=`0${t.hours}`.slice(-2),a.innerHTML=`0${t.minutes}`.slice(-2),o.innerHTML=`0${t.seconds}`.slice(-2),t.total<=0&&clearInterval(i)};n();const i=setInterval(n,1e3)})(new Date(Date.parse(new Date)+6048e5))}},s={};function r(e){var a=s[e];if(void 0!==a)return a.exports;var o=s[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,s,a,o)=>{if(!s){var n=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],o=e[u][2];for(var i=!0,c=0;c<s.length;c++)(!1&o||n>=o)&&Object.keys(r.O).every((e=>r.O[e](s[c])))?s.splice(c--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,a,o]},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={449:0};r.O.j=t=>0===e[t];var t=(t,s)=>{var a,o,n=s[0],i=s[1],c=s[2],l=0;if(n.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(t&&t(s);l<n.length;l++)o=n[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},s=self.webpackChunkonline_course=self.webpackChunkonline_course||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var a=r.O(void 0,[950,809],(()=>r(112)));a=r.O(a)})();
//# sourceMappingURL=course.bundle.js.map