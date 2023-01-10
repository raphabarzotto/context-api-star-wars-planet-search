const URL = 'https://swapi.dev/api/planets';

const getPlanets = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPlanets;
