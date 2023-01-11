'use strict';

// PART 1: SHOW A FORTUNE
//Fill in the function in the JavaScript file to load the text returned by this route 
  //and put it into the #fortune-text div.  x (fortune-text div is the text box field under the giant "get fortune" button)
  //You should use fetch(). x



function showFortune(evt) {
//
  fetch('/fortune')
  // fetches stuff from route
  .then((response) => response.text())
  // removes text from object
  .then((responseText) => {
    // replaces div text with responseTxt
    document.querySelector("#fortune-text").innerHTML = responseText;
  });
}
//this line works first where once the "get fortune" button is clicked, it triggers the function above to fire and output our random fortune
document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
