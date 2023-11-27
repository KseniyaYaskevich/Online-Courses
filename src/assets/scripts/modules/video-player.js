import {
  trapTabKey
} from '../base/trap-tab-key';

export const videoPlayer = () => {
  const videoModal = document.querySelector('.modal-video');
  const video = videoModal.querySelector('.modal-video__viewer');
  const videoControls = videoModal.querySelector('.modal-video__controls');
  const videoPlayButton = videoModal.querySelector('.modal-video__button');

  const togglePlayButton = videoModal.querySelector('.controls__button--play');
  const togglePlaySvg = videoModal.querySelector('.controls__button--play svg use');
  const toggleVolumeButton = videoModal.querySelector('.controls__button--volume');
  const toggleVolumeSvg = videoModal.querySelector('.controls__button--volume svg use');
  const progressSlider = videoModal.querySelector('.controls__slider--progress');
  const volumeSlider = videoModal.querySelector('.controls__slider--volume');

  const spritePath = 'assets/images/sprite.svg';
  const colorGray = '#B3B7BC';
  const colorPrimary = '#FF3F3A';

  let videoPaused = true;
  let mousedown = false;
  let volumeActualValue = 0.2;
  video.volume = volumeActualValue;

  const showControls = () => {
    videoControls.classList.add('modal-video__controls--visible');

    videoPlayButton.setAttribute('disabled', '');
    videoPlayButton.style.display = 'none';
    trapTabKey(videoModal);
  };

  const playVideo = () => {
    if (video.paused) {
      video.play();
      togglePlaySvg.setAttribute('xlink:href', `${spritePath}#pause`);
    } else {
      video.pause();
      togglePlaySvg.setAttribute('xlink:href', `${spritePath}#play`);
    }
  };

  const onVolumeToggleClick = () => {
    const previousValue = video.volume;

    if (video.volume === 0) {
      video.volume = volumeActualValue;
      volumeSlider.value = volumeActualValue * 100;
      toggleVolumeSvg.setAttribute('xlink:href', `${spritePath}#volume`);
      volumeSlider.style.background = `linear-gradient(to right, ${colorPrimary} 0%, ${colorPrimary} ${volumeSlider.value}%, ${colorGray} ${volumeSlider.value}%, ${colorGray} 100%)`;
    } else {
      video.volume = 0;
      volumeSlider.value = 0;
      toggleVolumeSvg.setAttribute('xlink:href', `${spritePath}#mute`);
      volumeSlider.style.background = `linear-gradient(to right, ${colorPrimary} 0%, ${colorPrimary} 0%, ${colorGray} 0%, ${colorGray} 100%)`;
    }

    volumeActualValue = previousValue;
  };

  const updateVideo = (evt) => {
    const scrubTime = (evt.offsetX / progressSlider.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  };

  const updateVolume = (evt) => {
    const volume = evt.target.value;

    video.volume = volume / 100;

    if (video.volume === 0) {
      video.muted = true;
      toggleVolumeSvg.setAttribute('xlink:href', `${spritePath}#mute`);
    } else {
      video.muted = false;
      toggleVolumeSvg.setAttribute('xlink:href', `${spritePath}#volume`);
    }
  };

  const updateProgress = () => {
    const duration = video.duration;
    const currentTime = video.currentTime;

    progressSlider.value = 100 * currentTime / duration;
    progressSlider.style.background = `linear-gradient(to right, ${colorPrimary} 0%, ${colorPrimary} ${progressSlider.value}%, ${colorGray} ${progressSlider.value}%, ${colorGray} 100%)`;
  };

  const updateRange = (evt) => {
    const elem = evt.target;
    const value = elem.value;

    elem.style.background = `linear-gradient(to right, ${colorPrimary} 0%, ${colorPrimary} ${value}%, ${colorGray} ${value}%, ${colorGray} 100%)`;
  };

  videoPlayButton.addEventListener('click', showControls);
  videoPlayButton.addEventListener('click', playVideo);

  video.addEventListener('click', playVideo);
  video.addEventListener('timeupdate', updateProgress);

  togglePlayButton.addEventListener('click', playVideo);
  toggleVolumeButton.addEventListener('click', onVolumeToggleClick);

  progressSlider.addEventListener('input', updateRange);
  progressSlider.addEventListener('click', updateVideo);
  progressSlider.addEventListener('mousemove', (evt) => mousedown && updateVideo(evt));
  progressSlider.addEventListener('mousedown', () => {
    mousedown = true;
    if (video.paused) {
      videoPaused = true;
    } else {
      videoPaused = false;
      video.pause();
    }
  });
  progressSlider.addEventListener('mouseup', () => {
    mousedown = false;
    if (videoPaused) {
      video.pause();
    } else {
      video.play();
    }
  });

  progressSlider.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowLeft' || evt.key === 'ArrowDown' || evt.key === 'ArrowRight' || evt.key === 'ArrowUp') {
      video.currentTime += (evt.key === 'ArrowLeft' || evt.key === 'ArrowDown') ? -5 : 5;
    }
    if (evt.key === ' ') {
      playVideo();
    }
  }, false);

  volumeSlider.addEventListener('input', updateRange);
  volumeSlider.addEventListener('click', updateVolume);
  volumeSlider.addEventListener('mousemove', (evt) => mousedown && updateVolume(evt));
  volumeSlider.addEventListener('mousedown', () => mousedown = true);
  volumeSlider.addEventListener('mouseup', () => mousedown = false);
  volumeSlider.addEventListener('keydown', (evt) => {
    let videoVolume = video.volume;

    if (evt.key === 'ArrowLeft' || evt.key === 'ArrowDown' || evt.key === 'ArrowRight' || evt.key === 'ArrowUp') {
      videoVolume += (evt.key === 'ArrowLeft' || evt.key === 'ArrowDown') ? -0.05 : 0.05;

      if (videoVolume <= 0) {
        videoVolume = 0;
        video.muted = true;
        toggleVolumeSvg.setAttribute('xlink:href', `${spritePath}#mute`);
      }
      if (videoVolume > 0) {
        video.muted = false;
        toggleVolumeSvg.setAttribute('xlink:href', `${spritePath}#volume`);
      }
      if (videoVolume >= 1) {
        videoVolume = 1;
      }

      video.volume = videoVolume.toFixed(2);
    }
  }, false);
};
