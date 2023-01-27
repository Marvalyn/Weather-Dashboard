//add url + api key
var cities =[];

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
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();
  
    // This line will grab the text from the input box
    var cityButton = $("#search-input").val().trim();
    // The movie from the textbox is then added to our array
    cities.push(cityButton);
  
    // calling renderButtons which handles the processing of our movie array
    renderButtons();
  });
// use local storage to persist data
// use api key to retrieve data for a city when the city is searched
//city name
// date
//icon
// temperature
// humidity
//windspeed
//weather condistions are displayed as a 5 day forecast showing
// date
//icons
// temperature
// humidity
 
//when a city is searched append buttons to the list of button