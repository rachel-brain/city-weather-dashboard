// STILL TODO:
// 1. Save city search history to local storage
// 2. Append each city to the list under the search button
// 3. When I click on a city in the search history, I am again presented with current & future conditions for that city
// 4. When I view the UV index, I am presented with a color that indicates whether the conditions are favorable/moderate/severe
// 5. Remove console.logs

// TEST WITH LIVE SERVER!


$(document).ready(function () {

    var searchButton = $('#search-button');
    var cityInputEl = $('#city-input');
    var cityForm = $('#city-form');
    var weatherIcon = $('#icon');
    var cityEl = $('#city-details');
    var cityResults = $('#city-results');
    var apiKey = '80af9fa09f2eb89db0802ae831a905bc';
    var cityList = $('#city-list');
    var cities = [];
    var storedCities = [];


    function renderCities() {
        // Saved search cities (10 only) are rendered onto page as a list item
        // for (var i = 0; i < cityInputEl.length; i++) {
        for (var i = 0; i < 10; i++) {
            var city = cities[i];

            var li = document.createElement('li');
            li.textContent = city;
            li.setAttribute('data-index', i);

            cityList.appendChild(li);
        };
    };

    function init() {
        // Get stored cities from localStorage
        // var storedCities = JSON.parse(localStorage.getItem('cities'));
        var storedCities = JSON.parse(localStorage.getItem('cities[i]'));
        storedCities = document.getElementById('city-input').value
        // document.getElementById('city-input').value = JSON.parse(localStorage.getItem(i));

        // console.log(storedCities).value;
        // console.log(storedCities[0]).value;
        // console.log(storedCities[1]).value;


        // document.getElementById('city-input').value = JSON.parse(localStorage.getItem(i));
        console.log(cityInputEl).value;
        console.log(cityInputEl[0]).value;
        console.log(cityInputEl[1]).value;


        // If cities were retrieved from localStorage, update the cities array to it
        if (storedCities !== null) {
            cities = storedCities;
        };

        renderCities();
    };

    function getApi(event) {
        event.preventDefault();
        var requestUrlOne = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.val() + '&units=metric&appid=' + apiKey;

        fetch(requestUrlOne)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                var latEl = data.coord.lat;
                var lonEl = data.coord.lon;

                var requestUrlTwo = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latEl + '&lon=' + lonEl + '&units=metric&exclude=hourly,minutely&appid=' + apiKey;

                fetch(requestUrlTwo)
                    .then(function (nextResponse) {
                        return nextResponse.json();
                    })
                    .then(function (moreData) {
                        console.log(moreData);

                        function displayToday() {
                            $('#city-details').text(data.name);

                            var unixFormat = moment.unix(moreData.daily[0].dt).format('D/MM/YYYY');
                            $('#today').text(unixFormat);

                            var todayIcon = moreData.daily[0].weather[0].icon;
                            document.querySelector('.icon').src = 'http://openweathermap.org/img/wn/' + todayIcon + '@2x.png';

                            $('#max-temp').text(moreData.daily[0].temp.max);
                            $('#wind-speed').text(moreData.daily[0].wind_speed);
                            $('#humidity').text(moreData.daily[0].humidity);
                            $('#uvi').text(moreData.daily[0].uvi);

                            // Use .setAttribute() method to change color
                            // function checkUvi() {
                            var uviColor = $('#uvi');
                            //     var uviEl = moreData.daily[0].uvi;
                            //     console.log(uviEl);

                            //     if (uviEl > 5.1) {
                            // uviColor.setAttribute('style', 'color:var(--red)')
                            // uviColor.text.setAttribute('style', 'color:var(--red)')
                            // $('#uvi').text.setAttribute('style', 'color:#c01025');
                            // uviColor.setAttribute('style', 'color:#c01025');
                            // } else if (uviEl > 3.0 && uviEl < 5.0) {
                            // uviColor.setAttribute('style', 'color:var(--yellow)')
                            // $('#uvi').setAttribute('style', 'color:#ffc623');
                            // uviColor.setAttribute('style', 'color:#ffc623');
                            // } else {
                            // uviColor.setAttribute('style', 'color:var(--green)')
                            // $('#uvi').setAttribute('style', 'color:#008000');
                            // uviColor.setAttribute('style', 'color:#008000');
                            //     };
                            // };

                            // checkUvi();

                            function displayForecast() {

                                // Add to card1
                                var unixFormat = moment.unix(moreData.daily[1].dt).format('D/MM/YYYY');
                                $('#forecast-date-1').text(unixFormat);

                                var dailyIconOne = moreData.daily[1].weather[0].icon;
                                document.querySelector('.icon-1').src = 'http://openweathermap.org/img/wn/' + dailyIconOne + '@2x.png';

                                $('#forecast-max-temp-1').text(moreData.daily[1].temp.max);
                                $('#forecast-wind-speed-1').text(moreData.daily[1].wind_speed);
                                $('#forecast-humidity-1').text(moreData.daily[1].humidity);

                                // Add to card2    
                                var unixFormat = moment.unix(moreData.daily[2].dt).format('D/MM/YYYY');
                                $('#forecast-date-2').text(unixFormat);

                                var dailyIconTwo = moreData.daily[2].weather[0].icon;
                                document.querySelector('.icon-2').src = 'http://openweathermap.org/img/wn/' + dailyIconTwo + '@2x.png';

                                $('#forecast-max-temp-2').text(moreData.daily[2].temp.max);
                                $('#forecast-wind-speed-2').text(moreData.daily[2].wind_speed);
                                $('#forecast-humidity-2').text(moreData.daily[2].humidity);

                                // Add to card3
                                var unixFormat = moment.unix(moreData.daily[3].dt).format('D/MM/YYYY');
                                $('#forecast-date-3').text(unixFormat);

                                var dailyIconThree = moreData.daily[3].weather[0].icon;
                                document.querySelector('.icon-3').src = 'http://openweathermap.org/img/wn/' + dailyIconThree + '@2x.png';

                                $('#forecast-max-temp-3').text(moreData.daily[3].temp.max);
                                $('#forecast-wind-speed-3').text(moreData.daily[3].wind_speed);
                                $('#forecast-humidity-3').text(moreData.daily[3].humidity);

                                // Add to card4 
                                var unixFormat = moment.unix(moreData.daily[4].dt).format('D/MM/YYYY');
                                $('#forecast-date-4').text(unixFormat);

                                var dailyIconFour = moreData.daily[4].weather[0].icon;
                                document.querySelector('.icon-4').src = 'http://openweathermap.org/img/wn/' + dailyIconFour + '@2x.png';

                                $('#forecast-max-temp-4').text(moreData.daily[4].temp.max);
                                $('#forecast-wind-speed-4').text(moreData.daily[4].wind_speed);
                                $('#forecast-humidity-4').text(moreData.daily[4].humidity);

                                // Add to card5
                                var unixFormat = moment.unix(moreData.daily[5].dt).format('D/MM/YYYY');
                                $('#forecast-date-5').text(unixFormat);

                                var dailyIconFive = moreData.daily[5].weather[0].icon;
                                document.querySelector('.icon-5').src = 'http://openweathermap.org/img/wn/' + dailyIconFive + '@2x.png';

                                $('#forecast-max-temp-5').text(moreData.daily[5].temp.max);
                                $('#forecast-wind-speed-5').text(moreData.daily[5].wind_speed);
                                $('#forecast-humidity-5').text(moreData.daily[5].humidity);
                            };
                            displayForecast();
                        };
                        displayToday();
                    });
            });
    };

    searchButton.click(getApi);


    // var repoList = document.querySelector('ul');
    // .then(function (data) {
    //     for (var i = 0; i < data.length; i++) {
    //       var listItem = document.createElement('li');
    //       listItem.textContent = data[i].html_url;
    //       repoList.appendChild(listItem);
    // };


    // Save all city inputs individually & append as list items
    function saveCities() {
        // localStorage.setItem('cities', JSON.stringify(cities));
        // localStorage.setItem(i, JSON.stringify(document.querySelector('#city-input').value));
        // console.log('#city-input').value;

        // Save to local storage
        //     for (var i = 0; i < cityInputEl.length; i++) {
        for (var i = 0; i < 10; i++) {
            localStorage.setItem(i, JSON.stringify(document.querySelector('#city-input').value));
            // console.log(cityInputEl[i]);
            // console.log([i]);
        };

        // Return from function early if submitted cityInputEl is blank
        if (cityInputEl === "") {
            return;
        };
    };
    // Add new city to cities array, clear the input
    cities.push(cityInputEl);
    cityInputEl.value = "";

    // Store updated cities in localStorage, re-render the history list
    saveCities();
    renderCities();

    init();

});