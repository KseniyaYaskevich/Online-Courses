export const getData = async (str) => {
  const data = await fetch(`assets/json/${str}.json`);
  if (data.ok) {
    return data.json();
  } else {
    throw new Error(`Data not received, error ${data.status} ${data.statusText}`);
  }
};
