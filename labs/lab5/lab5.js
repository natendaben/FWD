$results = $('#results');
var cityName;

$(function(){
    $('#query').on('click', searchCity);
});

function searchCity(){
    cityName = $('#inputBox').val(); //set city name variable (string)
    var url = new URL("http://api.openweathermap.org/data/2.5/weather"); //new URL with base for API call
    var parameters = { //create parameters object 
        q: cityName, //this is as defined by API documentation for searching by cityname
        APPID: "3b8efbefb44e2daa2acab78533e63f61" //API key assigned by OpenWeather API
    }
    url.search = new URLSearchParams(parameters); //attach parameters to URL

    fetch(url) //use Fetch API to send url and get JSON in response
        .then(response => {
            return response.json(); //convert response to json object
        })
        .then(data => {
            showResults(data); //call showResults and pass data to it
        })
        .catch(err => {
            console.log("There was an error in fetch"); //catch any errors
        })
}

function showResults(response){
    // console.log(JSON.stringify(response)); //check to make sure JSON is being delivered properly
    var weatherData = response;
    if (weatherData.message == "city not found"){ //handle case of city not being found
        console.log("city wasn't found, oops");
        alert("Sorry, that city wasn't found. Please try a different city name."); //alert message for user
    } else{
        $results.html(""); //clear results section
        var header = "<h2 id='successHeader'>Here is the weather in " + cityName + " right now:</h2>";
        var weatherOverall = "<h3>" + weatherData.weather[0].main + "</h3>";
        var currentTempF = "<p id='currentTemp'>" + convertKtoF(weatherData.main.temp) + " °F</p>"; //get current temp
        var lowTempF = "<p id='lowTemp'>Low: " + convertKtoF(weatherData.main.temp_min) + " °F</p>"; //get low temp
        var highTempF = "<p id='highTemp'>High: " + convertKtoF(weatherData.main.temp_max) + " °F</p>"; //get high temp
        var weatherIcon = "<img id='weatherIcon' src='http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png' alt='weather icon'>"; //grab weather icon from API

        $results.html(header + "<div id='weatherData'>" + weatherIcon + "<div id='weatherWords'>" + weatherOverall + currentTempF + lowTempF + highTempF + "</div></div>"); //add everything to the results page
    }
}

function convertKtoF(kelvinAsString){
    var kelvinNum = Number(kelvinAsString); //convert from string to num
    var fahrenheitTemp = (kelvinNum - 273.15)*9/5 + 32; //convert to fahrenheit
    return Math.round(fahrenheitTemp); //round to nearest int and return
}