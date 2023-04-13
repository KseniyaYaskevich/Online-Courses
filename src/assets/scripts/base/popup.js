import {trapTabKey} from './trap-tab-key';

export const popup = () => {
  const pageBody = document.querySelector('.page__body');
  const openModalLogin = pageBody.querySelector('.account__login');
  const openModalRegister = pageBody.querySelector('.account__register');
  const closeButtons = pageBody.querySelectorAll('.modal__close');
  const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  let lastFocusedElement;

  const closeModal = () => {
    if (document.querySelector('.modal--visible')) {
      pageBody.classList.remove('page__body--lock');
      document.querySelector('.modal--visible').classList.remove('modal--visible');
      document.querySelector('.modal-wrapper--visible').classList.remove('modal-wrapper--visible');

      lastFocusedElement.focus();
    }
    // if (evt.target.parentNode.classList.contains('modal-video')) {
    //   const player = pageBody.querySelector('.modal-video__player');
    //   player.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    // }
  };

  const openModal = (evt) => {
    const modalClass = evt.target.dataset.name;
    const modal = pageBody.querySelector(`.${modalClass}`);
    const modalWrapper = modal.closest('.modal-wrapper');
    const focusableElements = modal.querySelectorAll(focusableElementsString);

    lastFocusedElement = document.activeElement;

    pageBody.classList.add('page__body--lock');
    modal.classList.add('modal--visible');
    modalWrapper.classList.add('modal-wrapper--visible');

    trapTabKey(focusableElements, modal);

    modal.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 || e.key === 'Escape' || e.key === 'Esc') {
        closeModal();
      }
    });

    modalWrapper.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal-wrapper')) {
        closeModal();
      }
    });
  };

  openModalLogin.addEventListener('click', openModal);
  openModalRegister.addEventListener('click', openModal);

  if (pageBody.querySelector('.play-button')) {
    const openModalVideo = pageBody.querySelector('.play-button');
    openModalVideo.addEventListener('click', openModal);
  }

  closeButtons.forEach((button) => button.addEventListener('click', closeModal));
};
