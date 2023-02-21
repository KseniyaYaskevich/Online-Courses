const getTimeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    'total': total,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};

const initializeClock = (endtime) => {
  const clock = document.querySelector('#countdown');
  const daysSpan = clock.querySelector('#countdown-days');
  const hoursSpan = clock.querySelector('#countdown-hours');
  const minutesSpan = clock.querySelector('#countdown-minutes');
  const secondsSpan = clock.querySelector('#countdown-seconds');

  const updateClock = () => {
    const time = getTimeRemaining(endtime);

    daysSpan.innerHTML = (`0${time.days}`).slice(-2);
    hoursSpan.innerHTML = (`0${time.hours}`).slice(-2);
    minutesSpan.innerHTML = (`0${time.minutes}`).slice(-2);
    secondsSpan.innerHTML = (`0${time.seconds}`).slice(-2);

    if (time.total <= 0) {
      clearInterval(timeinterval);
    }
  };

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
};

const deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock(deadline);
