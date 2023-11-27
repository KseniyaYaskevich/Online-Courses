import {trapTabKey} from './trap-tab-key';

export const popup = () => {
  const pageBody = document.querySelector('.page__body');
  const openModalLogin = pageBody.querySelector('.account__login');
  const openModalRegister = pageBody.querySelector('.account__register');
  const closeButtons = pageBody.querySelectorAll('.modal__close');
  let lastFocusedElement;

  const closeModal = () => {
    if (document.querySelector('.modal-video')) {
      const videoModal = document.querySelector('.modal-video');

      if (videoModal.classList.contains('modal--visible')) {
        const video = videoModal.querySelector('.modal-video__viewer');
        const togglePlaySvg = videoModal.querySelector('.controls__button--play svg use');
        const spritePath = 'assets/images/sprite.svg';

        if (video.play) {
          video.pause();
          togglePlaySvg.setAttribute('xlink:href', `${spritePath}#play`);
        }
      }
    }

    if (document.querySelector('.modal--visible')) {
      pageBody.classList.remove('page__body--lock');
      document.querySelector('.modal--visible').classList.remove('modal--visible');
      document.querySelector('.modal-wrapper--visible').classList.remove('modal-wrapper--visible');

      lastFocusedElement.focus();
    }
  };

  const openModal = (evt) => {
    const modalClass = evt.target.dataset.name;
    const modal = pageBody.querySelector(`.${modalClass}`);
    const modalWrapper = modal.closest('.modal-wrapper');

    lastFocusedElement = document.activeElement;

    pageBody.classList.add('page__body--lock');
    modal.classList.add('modal--visible');
    modalWrapper.classList.add('modal-wrapper--visible');

    trapTabKey(modal);

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
