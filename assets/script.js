//add url + api key
var cities = [];

$(".grid-child").hide()

function displayWeatherInfo() {

    var inputCity = $("#search-input").val();
    var apikey = "184c633681edbe39db7894b1a26e644b";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity + "&units=metric&appid=" + apikey;

    //  console.log(inputCity);
    // Creates AJAX call for the specific city being called
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(queryURL);
        console.log(response);

        //add weather info for current day
        //city name
        //select element by ID
        var cityName = $("#current-city-name");
        // adding text from JSON data to complete city name
        cityName.text("Current Weather In: " + response.city.name);

        // date
        // creating variable with moment.js
        var today = moment();
        //formatting date and adding it to the p element with id="current-date"
        $("#current-date").text("Date: " + today.format("dddd, Do MMMM YYYY"));

        // temperature
        var currentTemp = $("#current-temperature");
        currentTemp.text("Current Temperature: " + response.list[0].main.temp + "C");

        // humidity
        var currentHumidity = $("#current-humidity");
        currentHumidity.text("Current Humidity: " + response.list[0].main.humidity + "%");

        //windspeed
        var currentWindspeed = $("#current-windspeed");
        currentWindspeed.text("Current Windspeed: " + response.list[0].wind.speed + "m/s");

        //icon
        var currentIcon = $("#current-icon");
        var currentWeatherIcon = response.list[0].weather[0].icon;
        currentIcon.attr("src", "http://openweathermap.org/img/wn/" + currentWeatherIcon + "@4x.png");

        // add weather conditions for coming 5 days
        // for (var i=0; i <6; i++) {
        //     $("#day" + (i+1) + "Date").text
        // }

        // for (var i=0; i<5; i++) {
        //     $(".temperature")
        // }

        // $(".temperature").each(function () {
        //     $(this).text("Current Temperature: " + response.list[i].main.temp);
        // })

        // var fiveDayTemperature = $(".temperature").
        // for (var i = 0; i < 5; i++) {
        //     // temperature
        //     $(".temperature").text("Temperature: " + response.list[i].main.temp);
        //     // humidity
        //     $(".humidity").text("Humidity: " + response.list[i].main.humidity + "%");
        //     //icons
        //     $(".img-class").attr("src", "http://openweathermap.org/img/wn/" + response.list[i].weather[i].icon + "@4x.png");
        // }
        var dayOne = moment().add(1, 'days').format("dddd, Do MMMM YYYY")
        $("#day1").text("Date: " + dayOne);

        var dayTwo = moment().add(2, 'days').format("dddd, Do MMMM YYYY")
        $("#day2").text("Date: " + dayTwo);

        var dayThree = moment().add(3, 'days').format("dddd, Do MMMM YYYY")
        $("#day3").text("Date: " + dayThree);

        var dayFour = moment().add(4, 'days').format("dddd, Do MMMM YYYY")
        $("#day4").text("Date: " + dayFour);

        var dayFive = moment().add(5, 'days').format("dddd, Do MMMM YYYY")
        $("#day5").text("Date: " + dayFive);

        //icons
    var iconOne= $("#icon-1");
    var forecastIconOne = response.list[1].weather[0].icon;
    iconOne.attr("src", "http://openweathermap.org/img/wn/" + forecastIconOne + "@2x.png");

    var iconTwo= $("#icon-2");
    var forecastIconTwo = response.list[2].weather[0].icon;
    iconTwo.attr("src", "http://openweathermap.org/img/wn/" + forecastIconTwo + "@2x.png");

    var iconThree= $("#icon-3");
    var forecastIconThree = response.list[3].weather[0].icon;
    iconThree.attr("src", "http://openweathermap.org/img/wn/" + forecastIconThree + "@2x.png");

    var iconFour= $("#icon-4");
    var forecastIconFour = response.list[4].weather[0].icon;
    iconFour.attr("src", "http://openweathermap.org/img/wn/" + forecastIconFour + "@2x.png");

    var iconFive= $("#icon-5");
    var forecastIconFive = response.list[5].weather[0].icon;
    iconFive.attr("src", "http://openweathermap.org/img/wn/" + forecastIconFive + "@2x.png");

    //temperature
    var tempOne = $("#temperature1");
    tempOne.text("Temperature: " + response.list[1].main.temp + "C");

    var tempTwo = $("#temperature2");
    tempTwo.text("Temperature: " + response.list[2].main.temp + "C");

    var tempThree = $("#temperature3");
    tempThree.text("Temperature: " + response.list[3].main.temp + "C");

    var tempFour = $("#temperature4");
    tempFour.text("Temperature: " + response.list[4].main.temp + "C");

    var tempFive = $("#temperature5");
    tempFive.text("Temperature: " + response.list[5].main.temp + "C");

    //humidity
     var humidityOne = $("#humidity1");
    humidityOne.text("Humidity: " + response.list[1].main.humidity + "%");

    var humidityTwo = $("#humidity2");
    humidityTwo.text("Humidity: " + response.list[2].main.humidity + "%");

    var humidityThree = $("#humidity3");
    humidityThree.text("Humidity: " + response.list[3].main.humidity + "%");

    var humidityFour = $("#humidity4");
    humidityFour.text("Humidity: " + response.list[4].main.humidity + "%");

    var humidityFive = $("#humidity5");
    humidityFive.text("Humidity: " + response.list[5].main.humidity + "%");
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
    $(".grid-child").show()
    // console.log(localStorage)

}

$("#search-button").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    event.preventDefault();

    // // This line will grab the text from the input box
    var cityButton = $("#search-input").val().trim();
    //This line pushes the new input city into the cities array
    cities.push(cityButton);

    // var cityList = JSON.stringify(cityLocation);
    // console.log(cityList);

    // localStorage.setItem("location", cities);
   
    // localStorage.getItem(location);

    // console.log(location)
    // calling renderButtons which handles the processing of our city array
    renderButtons();
    displayWeatherInfo();
    // localStorage.setItem("location", cities);
    // // localStorage.getItem("location").split(",");
    // // for (var i = 0; i < 20; i++) {
    //     // select the 
    //     $(".city-history" + i).val(localStorage.getItem(i));
    // }
});


// function addHistory() {
//     // Check for changes in the local item and log them
//     var location = cities.push($("#search-input").val());
//     localStorage.setItem("cities", cities);
// };

// function addHistory() {
    
//     var location = cities.split(",");
//     // $("#history").children("button").val();
//     // var weather = $("#history").children("button").attr("data-name");
    
//     localStorage.setItem("location", location)
// }

// addHistory();



