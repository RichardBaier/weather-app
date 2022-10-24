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
    await fetch(cityWeather)
    .then(res => res.json())
    .then(data => console.log(data))
} 

$('.searchBtn').click(() => {
    var searchInput = $('#searchInput').val();

    weatherSearch(searchInput);
})

function dataDisplay() {
    
}