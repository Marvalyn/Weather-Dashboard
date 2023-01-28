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
 
 //     //   $("#movies-view").empty();
  
 //     //   //create a HTML tag for the poster image
 //     //   var poster = $("<img>");
 //     //   //update the source attribute
 //     //   poster.attr("src", response.Poster);
 //     //   $("#movies-view").append(poster);
  
  
 //     //   //create a div for the rating
 //     //   var rating = $("<div>");
 //     //   rating.text("Rated " + response.Rated);
  
 //     //   //create a div for the release date
 //     //   var realeaseMoment = moment(response.Released, "DD MMM YYYY");
 //     //   var formattedDate = realeaseMoment.format("MMMM [the] Do [in the superawesome year] YYYY");
  
 //     //   var releaseDate = $("<div>Released " +formattedDate +"</div>");
  
 //     //   //create a div for the plot
 //     //   var plot = $("<div>" + response.Plot + "</div>");
  
 //     //   //append to movies-view div
  
 //     //   $("#movies-view").prepend($("<hr>"));
 //     //   $("#movies-view").prepend(releaseDate);
 //     //   $("#movies-view").prepend(rating);
 //     //   $("#movies-view").prepend(poster);
 //     //   $("#movies-view").prepend(plot);
  
  
     });
  
   }

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