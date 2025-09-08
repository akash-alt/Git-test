// const geocodebase = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
// const weatherbase = "https://api.openweathermap.org/data/2.5/weather?"

// document.getElementById("getWeatherBtn").addEventListener("click", async () =>{
//     const city = document.getElementById("cityInput").value.trim();
//     if(!city){
//         alert("Please enter a city name");
//         return;
//     };

//     try {
//         const coords = await fetchCords(city);
//         if(!coords) throw new Error("City not found");
        
//         const weather = await fetchWeather(coords.latitude, coords.longitude);
//         displayWeather(city, weather);
//     } catch (error) {
//         document.getElementById("weatherResult").innerText = `Error: ${error.message}`;
//     }
// });


// async function fetchCords(lat,lon) {
//     const res = await fetch(`${geocodebase}?name=${encodeURIComponent(city)}&count=1`);
//     const data = await res.json();
//     return data.results?.[0] || null;
// }

// async function fetchWeather(lat, lon) {
//     const res = await fetch(`${weatherbase}?latitude=${lat}&longitude=${lon}&current_weather=true`);
//     const data = await res.json();
//     return data.current_weather;
// }


// function displayWeather(weather) {
//     const resultDiv = document.getElementById("weatherResult");
//     resultDiv.innerText = `Temperature: ${weather.temperature}°C, Windspeed: ${weather.windspeed} km/h`;

// }



// Open-Meteo has free weather API: requires lat & lon.
// We'll use the geocoding endpoint to resolve city → coordinates.

const geocodeBase = "https://geocoding-api.open-meteo.com/v1/search";
const weatherBase = "https://api.open-meteo.com/v1/forecast";

document.getElementById("getWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Enter a city name");
    return;
  }
  try {
    const coords = await fetchCoordinates(city);
    if (!coords) throw new Error("City not found");

    const weather = await fetchWeather(coords.latitude, coords.longitude);
    displayWeather(city, weather);
  } catch (err) {
    document.getElementById("weatherResult").textContent = `Error: ${err.message}`;
  }
});

async function fetchCoordinates(city) {
  const res = await fetch(`${geocodeBase}?name=${encodeURIComponent(city)}&count=1`);
  const data = await res.json();
  return data.results?.[0] || null;
}

async function fetchWeather(lat, lon) {
  const res = await fetch(`${weatherBase}?latitude=${lat}&longitude=${lon}&current_weather=true`);
  const data = await res.json();
  return data.current_weather;
}

function displayWeather(city, weather) {
  const resultDiv = document.getElementById("weatherResult");
  resultDiv.innerHTML = `
    <p><strong>${city}</strong></p>
    <p>Temperature: ${weather.temperature}°C</p>
    <p>Wind: ${weather.windspeed} km/h</p>
  `;
}
