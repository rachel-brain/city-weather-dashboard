# city-weather-dashboard
BOOTCAMP - Week 6 assignment

A simple weather app drawing data from the openweathermap API allowing users to search the weather outlook for multiple cities.


## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Instructions for use of the Weather Dashboard

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./assets/06-server-side-apis-homework-demo.png)

## Description
My motivation for undertaking this project was to fetch data from a third party API [openweathermap].  This project had the added difficulty of needing to call from 2 versions of the API to retreive all the weather information required plus a link to the weather icons in the API library.  It also provided an opportunity to practise using Bootstrap for setting up the html page & using local storage to save a search history.

## Installation
Open the (index.html) page in your prefered browser to see the finished webpage which is interactive & responsive for a number of different screen sizes.

## License
The MIT License has been applied which can be seen in the source file at (LICENSE.txt).

## Tests
The main test run was to practise the city input to ensure the data could always be retrieved & the city search saved.  Unfortunately, at the time of publishing, the site was not complete in the following ways:
   - not perfect in all screen sizes 
   - as only a city name was used, not a country id, at times a city with the same name in another country was chosen by the API instead of the one sought (for example, Melbourne, US rather than Melbourne, AU)
   - local Storage to facilitate search history
   Therefore, further debugging & refactoring is required.

## URLs

* URL of the deployed application:

https://rachel-brain.github.io/city-weather-dashboard/

* URL of the GitHub repository:

https://github.com/rachel-brain/city-weather-dashboard