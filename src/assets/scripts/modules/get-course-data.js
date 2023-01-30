// export const getData = () => fetch('assets/json/courses.json')
//   .then((response) => response.json());

export const getData = async () => {
  const data = await fetch('assets/json/courses.json');

  if (data.ok) {
    return data.json();
  } else {
    throw new Error(`Data not received, error ${data.status} ${data.statusText}`);
  }
};
