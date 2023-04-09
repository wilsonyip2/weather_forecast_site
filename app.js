const API_KEY = '8b05a0be55a0435fb4dffb54c7081771';

const form = document.querySelector('form');
const locationInput = document.querySelector('#location');
const city = document.querySelector('#city');
const days = document.querySelectorAll('[id^="day-"]');
const icons = document.querySelectorAll('[id^="icon-"]');
const temps = document.querySelectorAll('[id^="temp-"]');
const descs = document.querySelectorAll('[id^="desc-"]');

// Define a function to fetch the weather data for Hong Kong
async function getHongKongWeather() {
  const location = 'Hong Kong';
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    city.textContent = data.city_name;
    for (let i = 0; i < 7; i++) {
      days[i].textContent = data.data[i].datetime;
      icons[i].setAttribute('src', `https://www.weatherbit.io/static/img/icons/${data.data[i].weather.icon}.png`);
      temps[i].textContent = data.data[i].temp;
      descs[i].textContent = data.data[i].weather.description;
    }
  } catch (error) {
    console.error(error);
  }
}

// Call the function to fetch the weather data for Hong Kong when the page first loads
getHongKongWeather();

// Add an event listener to the form to fetch weather data for a new location when the form is submitted
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const location = locationInput.value;
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    city.textContent = data.city_name;
    for (let i = 0; i < 7; i++) {
      days[i].textContent = data.data[i].datetime;
      icons[i].setAttribute('src', `https://www.weatherbit.io/static/img/icons/${data.data[i].weather.icon}.png`);
      temps[i].textContent = data.data[i].temp;
      descs[i].textContent = data.data[i].weather.description;
    }
  } catch (error) {
    console.error(error);
  }
});