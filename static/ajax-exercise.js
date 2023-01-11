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
/*
 You’ll need to decide which kind of AJAX call to make, 
 and how to extract the forecast from the JSON object you get back.

We need to send the zip code to the server. 
If you aren’t sure how to do this for a GET request, refer to the lecture notes or documentation.
*/

function showWeather(evt) {
  evt.preventDefault();


  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  //create a fetch request to grab the url 
  //({ order: 123 }) -> pulling the forcast from the weather info obj
  const queryString = new URLSearchParams ({ 'zipcode': zipcode }).toString();
  const url = `weather.json?${queryString}`;
  fetch(url)
  //
  .then((response) => response.json())
  //
  .then((responseData) => {
    document.querySelector('#weather-info').innerHTML = responseData['forecast'];
  });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
