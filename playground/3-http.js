const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_ACCESS_KEY}&query=40.7306,-73.9866&units=m`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const dataJson = JSON.parse(data);
    console.log(dataJson);
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
