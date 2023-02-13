const getRandomNumber = (min = 1, max) => Math.random() * (max - min) + min;

export const getItems = (data, number) => {
  const newData = data;
  const tempArray = [];

  for (let i = 0; i < number; i++) {
    const randomIndex = Math.floor(getRandomNumber(1, 9));
    tempArray.push(newData[randomIndex]);
  }
  return tempArray;
};

export const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};
