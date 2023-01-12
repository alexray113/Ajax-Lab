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

We need to send
 the zip code to the server. 
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
//inputs: quantity and type of melon to order given by the user
//outputs: status code as an alert based on server.py
  // if qty > 10:
    // result_code = 'ERROR'
    // result_text = "You can't buy more than 10 melons"
  // elif qty > 0:
   // result_code = 'OK'
   // result_text = f"You have bought {qty} {melon} melons"
  // else:
    // result_code = 'ERROR'
    // result_text = "You want to buy fewer than 1 melons? Huh?"  



//Make sure you make the right type of request (if you aren’t sure, look at the server – is it expecting a GET or a POST?).
  //post request

  //need a query selector to select the form (provided)

/*
Fill in the missing parts of the JavaScript file. 

You can use fetch() to make a request to that route, 
  using the data from the form. 
  (from the order-form on html page)

  
Then, take the returned result object 
  and extract the status code and message.

  
Show the result’s message text in the #order-status div.

//error message in red
If the order status is ERROR,
 then the user ordered an inappropriate number of melons, 
 and we want the message to appear in red. 
 Look in the CSS file and you’ll see we have a CSS class intended for this.
 
 Write the JavaScript code to add this class 
  so that error messages (and only error messages) appear in red. You’ll want to use the HTML element method .classList.add() to add the right class onto the #order-status div.



*/

//call the event
function orderMelons(evt) {
  //prevent the default behavior (reloading)
  evt.preventDefault();
  //hold the information from the form the melontype and the quantity
  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };
  //
  fetch('/order-melons.json',{
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers:{
      'Content-Type':'application/json',
    },
    })
    .then((response)=> response.json())
    .then((responseJson)=>{
      alert(responseJson['msg']);
    });
  }
  // TODO: show the result message after your form 
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

document.querySelector('#order-form').addEventListener('submit', orderMelons);
