const pageBody = document.querySelector('.page__body');
const toggleButton = pageBody.querySelector('.menu__toggle');
const navbarMenu = pageBody.querySelector('.navbar__menu');
const navbarLinks = pageBody.querySelectorAll('.menu__link');

if (window.matchMedia('(max-width: 768px)').matches) {
  navbarLinks.forEach((link) => (link.setAttribute('tabIndex', '-1')));
}

const changeTabindexForLinks = () => {
  if (navbarMenu.classList.contains('is-opened')) {
    navbarLinks.forEach((link) => (link.attributes.tabIndex.value = '0'));
  } else {
    navbarLinks.forEach((link) => (link.attributes.tabIndex.value = '-1'));
  }
};

const onToggleButtonClick = () => {
  pageBody.classList.toggle('page__body--lock');
  navbarMenu.classList.toggle('is-opened');
  changeTabindexForLinks();
};

toggleButton.addEventListener('click', onToggleButtonClick);
