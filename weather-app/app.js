// openweathermap fd0f03e5d4356fa7abfbf7d6b4ce6c21
// weather stack: 7f59a3da70dcf69f6a75c17eb046a61e
// mapbox: pk.eyJ1IjoiYW5raXRrYW1ib2oxOCIsImEiOiJja3FjaGt4engwaHU3MndzMWFpM3U3amR3In0.kc5uq8Oh_UvBgdAy4PH5Fw
const request = require("request");

// const url = "https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=fd0f03e5d4356fa7abfbf7d6b4ce6c21";
const url =
  "http://api.weatherstack.com/current?access_key=7f59a3da70dcf69f6a75c17eb046a61e&query=Amsterdam&units=m";

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  // console.log(data.current);
  console.log(data.current.weather_descriptions[0]);
  console.log(`Currently its ${data.current.temperature} degree out there`);
  console.log(`It feels like ${data.current.feelslike} degree.`);
});

// const mapboxEndpoint ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json
// ?access_token=pk.eyJ1IjoiYW5raXRrYW1ib2oxOCIsImEiOiJja3FjaGt4engwaHU3MndzMWFpM3U3amR3In0.kc5uq8Oh_UvBgdAy4PH5Fw"

// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?
// access_token=pk.eyJ1IjoiYW5raXRrYW1ib2oxOCIsImEiOiJja3FjaGt4engwaHU3MndzMWFpM3U3amR3In0.kc5uq8Oh_UvBgdAy4PH5Fw&limit=1

const mapboxUri =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Amsterdam.json?access_token=pk.eyJ1IjoiYW5raXRrYW1ib2oxOCIsImEiOiJja3FjaGt4engwaHU3MndzMWFpM3U3amR3In0.kc5uq8Oh_UvBgdAy4PH5Fw&limit=1";

request({ url: mapboxUri, json: true }, (error, response) => {
  const data = response.body;
  console.log(
    `Latitude ${data.features[0].center[1]} Longitude: ${data.features[0].center[0]}`
  );
});
