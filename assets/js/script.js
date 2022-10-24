const appid = '721c8b136b03c70cf425c1cfedf9e114';

async function weatherSearch(searchInput) {
    const citySearch = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1&appid=${appid}`
    let cityWeather;

    await fetch(citySearch) 
    .then(res => res.json())
    .then(result => {
        cityWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${result[0].lat}&lon=${result[0].lon}&appid=${appid}&units=imperial`;
        console.log(result)
    })

    if(cityWeather) {
        await fetch(cityWeather)
        .then(res => res.json())
        .then(result => {
            currentData(result, searchInput);
            fiveData(result, searchInput);
        })
    }
} 

$('.searchBtn').click(() => {
    var searchInput = $('#searchInput').val();

    weatherSearch(searchInput);
})

//Function to set the current weather
function currentData(data, city) {
    const current = data.current;
    console.log(current);
    const date = new Date(current.dt * 1000).toLocaleDateString('en-US');
    //const icon = `https://openweathermap.org/img/wn/${current.weather[0].icon}.png`;

    const currentHtml = `<h2>${city} (${date})</h2>
                        <img src='https://openweathermap.org/img/wn/${current.weather[0].icon}.png'>
                        <p>Temp: ${current.temp}°F</p>
                        <p>Wind: ${current.wind_speed} MPH</p>
                        <p>Humidity: ${current.humidity}%</p>`

    $('#today-content').html('')
    $('#today-content').append(currentHtml);
}

// Function to set 5 day weather
function fiveData(data, city) {
    const daily = data.daily;
    console.log(daily)

    $('#forecast-container').html('');

    daily.forEach((day, index) => {
        if(index < 5) {

            const i = daily[index];

            const date = new Date(i.dt * 1000).toLocaleDateString('en-US');

            const dailyHtml = `<div class='day-forecast'>
                                <h3>${date}</h3>
                                <img src='https://openweathermap.org/img/wn/${i.weather[0].icon}.png'>
                                <p>Temp: ${i.temp}°F</p>
                                <p>Wind: ${i.wind_speed} MPH</p>
                                <p>Humidity: ${i.humidity}%</p>
                                </div>` 
            
            $('#forecast-container').append(dailyHtml);
        }
    });
}
// Function to add search to search history