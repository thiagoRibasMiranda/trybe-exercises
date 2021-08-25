const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      // Exercise 1 - add a joke to the page
      document.getElementById('jokeContainer').innerHTML = data.joke;
    });
  };
  window.onload = () => fetchJoke();