var CitySearch = [];

var cityFormEl=document.querySelector("#city-search-form");
var cityInputEl=document.querySelector("#city");
var weatherContainerEl=document.querySelector("#current-weather-container");
var citySearchInputEl = document.querySelector("#occupied-city");
var forecastTitle = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#projected-container");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");

var getWeather = function(city){
    var apiKey = "b021d84a2e6f6a1bd152e9041f8b1d83"
    var apiURL = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}"

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city);
        });
    });
};
