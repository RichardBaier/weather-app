fetch('api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={2bfce013845d4eb44cc8e46d179d989e}')
    .then(res => res.json())
    .then(data => console.log(data))