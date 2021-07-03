require("dotenv").config();

const { forecast } = require("./utils/forecast");
const { geoCode } = require("./utils/geocode");

const address = process.argv[2] || "London";
geoCode(address, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location);
    console.log(forecastData);
  });
});
