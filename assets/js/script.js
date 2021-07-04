// TODO:
// 1. User submits a city name
// 2. Run function getApi-1 using the first API
// 3. City name is converted into a latitude & longitude location 
// 4. lat & lon is added to the var requestURL in the second API
// 5. Run function getApi-2 using the 2nd API
// 6. Populate daily weather information
// 7. Populate 5-day forecast cards
// 8. Save city search history to local storage
// 9. Append each city to the list under the search button
// 10. Remove console.logs

// https://cors-anywhere.herokuapp.com/


$(document).ready(function () {


    // var today = moment();
    // $('#today').text(today.format("Do MMM, YYYY"));

    // var unixFormat = moment.unix(data.dt).format('D/MM/YYYY');
    // $('#today').text(unixFormat);



    var searchButton = $('#search-button');
    console.log(searchButton);
    var cityInputEl = $('#city-input');
    var cityEl = $('#city-details');
    var apiKey = '80af9fa09f2eb89db0802ae831a905bc';



    // function init() {
    // Saved cities searched are rendered onto page
    //     for (var i = 0; i < cityInputEl.length; i++) {
    //         document.getElementById('city-input').value = JSON.parse(localStorage.getItem(i));
    //         console.log(cityInputEl).value;
    //     };
    // };




    // api.openweathermap.org addresses:
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}
    // https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=80af9fa09f2eb89db0802ae831a905bc - works!
    // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=metric&exclude=hourly,minutely&appid={APIkey}
    // https://api.openweathermap.org/data/2.5/onecall?lat=-33.8679&lon=151.2073&units=metric&exclude=hourly,minutely&appid=80af9fa09f2eb89db0802ae831a905bc - works!
    // jQuery: ${lat}, ${lon}. ${city}

    // Data fetched from CURRENT WEATHER API:
    // var latEl = data.coord.lat;
    // var lonEl = data.coord.lon;
    // var date = data.dt;

    // Data fetched from ONECALL API:
    // var todayIcon = response.current.weather.icon;
    // var todayTemp = response.current.temp;
    // var todayHumidity = response.current.humidity;
    // var todayWindSpeed = response.current.wind_speed;
    // var todayUvindex = response.current.uvi;

    // Need to loop data for next five days of forecast [i]?
    // var dailyDate = response.daily[i].dt;
    // var dailyTemp = response.daily[i].temp.max;
    // var dailyHumidity = response.daily[i].humidity;
    // var dailyWindSpeed = response.daily[i].wind_speed;

    // TEST WITH LIVE SERVER!

    function getApi(event) {
        event.preventDefault();
        console.log("here!");
        var requestUrlOne = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.val() + '&units=metric&appid=' + apiKey;



        fetch(requestUrlOne)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                console.log(data.coord.lat);
                console.log(data.coord.lon);
                console.log(data.dt);
                $('#city-details').text(cityInputEl).val;
                var unixFormat = moment.unix(data.dt).format('D/MM/YYYY');
                $('#today').text(unixFormat);
                // $('.result-icon').text(data.weather.icon);


                // });

                var latEl = data.coord.lat;
                var lonEl = data.coord.lon;

                var requestUrlTwo = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&units=metric&exclude=hourly,minutely&appid=' + apiKey;

                fetch(requestUrlTwo)
                    .then(function (nextResponse) {
                        return nextResponse.json();
                    })
                    .then(function (moreData) {
                        console.log(moreData);
                        console.log(moreData.daily[0]);
                        console.log(moreData.daily[0].dt);
                        console.log(moreData.daily[0].weather[0].icon);
                        console.log(moreData.daily[0].temp.max);
                        console.log(moreData.daily[0].humidity);
                        console.log(moreData.daily[0].wind_speed);
                        console.log(moreData.daily[0].uvi);
                    });
            });
    };

    searchButton.click(getApi);

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    // };

    // handleFormSubmit();



    // var repoList = document.querySelector('ul');
    // .then(function (data) {
    //     for (var i = 0; i < data.length; i++) {
    //       var listItem = document.createElement('li');
    //       listItem.textContent = data[i].html_url;
    //       repoList.appendChild(listItem);
    // };


    // Save all city inputs individually - NEED TO APPEND AS LIST ITEMS
    // function saveCities() {
    // Save to local storage
    //     for (var i = 0; i < cityInputEl.length; i++) {
    //         localStorage.setItem(i, JSON.stringify(document.querySelector('#city-input').value));
    //         console.log(cityInputEl).value;
    //     };
    // };

    // saveCities();

    // init();

});