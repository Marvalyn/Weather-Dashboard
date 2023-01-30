//add url + api key
var cities = [];

$(".grid-child").hide()

function displayWeatherInfo(city) {

    var inputCity = city || $("#search-input").val();
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
        currentTemp.text("Current Temperature: " + response.list[0].main.temp + "°C");

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

    
        var dayOne = moment().add(1, 'days').format("dddd, Do MMMM YYYY")
        $("#day1").text(dayOne);

        var dayTwo = moment().add(2, 'days').format("dddd, Do MMMM YYYY")
        $("#day2").text(dayTwo);

        var dayThree = moment().add(3, 'days').format("dddd, Do MMMM YYYY")
        $("#day3").text(dayThree);

        var dayFour = moment().add(4, 'days').format("dddd, Do MMMM YYYY")
        $("#day4").text(dayFour);

        var dayFive = moment().add(5, 'days').format("dddd, Do MMMM YYYY")
        $("#day5").text(dayFive);

        //icons
        var iconOne = $("#icon-1");
        var forecastIconOne = response.list[1].weather[0].icon;
        iconOne.attr("src", "http://openweathermap.org/img/wn/" + forecastIconOne + "@2x.png");

        var iconTwo = $("#icon-2");
        var forecastIconTwo = response.list[2].weather[0].icon;
        iconTwo.attr("src", "http://openweathermap.org/img/wn/" + forecastIconTwo + "@2x.png");

        var iconThree = $("#icon-3");
        var forecastIconThree = response.list[3].weather[0].icon;
        iconThree.attr("src", "http://openweathermap.org/img/wn/" + forecastIconThree + "@2x.png");

        var iconFour = $("#icon-4");
        var forecastIconFour = response.list[4].weather[0].icon;
        iconFour.attr("src", "http://openweathermap.org/img/wn/" + forecastIconFour + "@2x.png");

        var iconFive = $("#icon-5");
        var forecastIconFive = response.list[5].weather[0].icon;
        iconFive.attr("src", "http://openweathermap.org/img/wn/" + forecastIconFive + "@2x.png");

        //temperature
        var tempOne = $("#temperature1");
        tempOne.text("Temp: " + response.list[1].main.temp + "°C");

        var tempTwo = $("#temperature2");
        tempTwo.text("Temp: " + response.list[2].main.temp + "°C");

        var tempThree = $("#temperature3");
        tempThree.text("Temp: " + response.list[3].main.temp + "°C");

        var tempFour = $("#temperature4");
        tempFour.text("Temp: " + response.list[4].main.temp + "°C");

        var tempFive = $("#temperature5");
        tempFive.text("Temp: " + response.list[5].main.temp + "°C");

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

        $(".grid-child").show();
    });
}
//when a city is searched append buttons to the list of button
function renderButtons(city) {

   
    var a = $("<button>");
    // Adding a class
    a.addClass("city-history");
    // Adding a data-attribute with a value of the city at index i
    a.attr("data-name", city);
    // Providing the button's text with a value of the city at index i
    a.text(city);
    // Adding the button to the HTML
    $("#history").append(a);
    // }

    // console.log(localStorage)

}

$("#search-button").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    event.preventDefault();
    // var cities = (localStorage.getItem("location").split(","));
    // // This line will grab the text from the input box
    var cityButton = $("#search-input").val().trim();
    if (!cities.includes(cityButton)) {
        //This line pushes the new input city into the cities array
        cities.push(cityButton);

        // var cityList = JSON.stringify(cityLocation);
        console.log(cities);

        localStorage.setItem("location", cities);

        // console.log(location)
        // calling renderButtons which handles the processing of our city array
        renderButtons(cityButton);
    }
    $(".grid-child").show()
    displayWeatherInfo();
   
});



function addHistory() {
    // Check for changes in the local item and log them
    // .split(",")
    let storedCities = JSON.parse(localStorage.getItem('searchHistory'));
        // If cities were retrieved from localStorage, update the search history array
        if (storedCities !== null) {
            searchHistory = storedCities;
        }
    var recentCities = (localStorage.getItem("location").split(","));
    console.log(localStorage.getItem("location").split(","));

    recentCities.forEach(function (city) {
        var a = $("<button>");
        // Adding a class
        a.addClass("city-history");
        // Adding a data-attribute with a value of the city at index i
        a.attr("data-name", city);
        // Providing the button's text with a value of the city at index i
        a.text(city);
        forecastHistory(a,city);
        // Adding the button to the HTML
        $("#history").append(a);
    })
};

addHistory();

function forecastHistory (button,city) {
$(button).on("click", function () {
    console.log(city);
    displayWeatherInfo(city);
    });
};

