//add url + api key
var cities =[];

function displayWeatherInfo() {

    var inputCity = $("#search-input").val();
     var apikey = "184c633681edbe39db7894b1a26e644b";
     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&units=metric&appid="+apikey;
  
    //  console.log(inputCity);
     // Creates AJAX call for the specific city being called
     $.ajax({
       url: queryURL,
       method: "GET"
     }).then(function(response) {
      
       console.log(queryURL);
       console.log(response);

       //add weather info for current day
       //city name
// date
//icon
// temperature
// humidity
//windspeed

// add weather conditions for coming 5 days

//weather condistions are displayed as a 5 day forecast showing
// date
//icons
// temperature
// humidity
  
     });
  
   }

   //when a city is searched append buttons to the list of button
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#history").empty();
  
    // Looping through the array of movies
    for (var i = 0; i < cities.length; i++) {
  
      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("city-history");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", cities[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(cities[i]);
      // Adding the button to the HTML
      $("#history").append(a);
    }
};

$("#search-button").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    event.preventDefault();
     // // This line will grab the text from the input box
    var cityButton = $("#search-input").val().trim();
   //This line pushes the new input city into the cities array
    cities.push(cityButton);
  
    // calling renderButtons which handles the processing of our city array
    renderButtons();
    displayWeatherInfo();
  });

// use local storage to persist data

// when button from list is clicked they are again presented with curent and future conditions for that city
// $(".city-history").on("click", function (event) {
//     event.preventDefault();
//     displayWeatherInfo();
// })





 
