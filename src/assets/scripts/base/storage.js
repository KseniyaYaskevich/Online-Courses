export const getItem = (key) => {
  const item = JSON?.parse(localStorage.getItem(key));
  return item ?? '';
};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
