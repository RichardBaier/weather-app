const appid = '2bfce013845d4eb44cc8e46d179d989e'

async function weatherSearch(search) {
    const searchCity = `https://api.openweathermap.org/geo/1.0/direct?q={search}&limit=1&appid={appid}`
    let cityWeather;

    fetch(searchCity) 
    .then(res => res.json())
    .then(result => {
        cityWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${result[0].lat}&lon=${result[0].lon}&appid=${appid}&units=imperial`;
    })
} 