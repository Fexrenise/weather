let url = 'https://api.openweathermap.org/data/2.5/';
let key ='983234ede9493f6e6adf86f6170df307';
let searchBar = document.querySelector('#searchBar');
let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let minmax = document.querySelector('.minmax');

let setQuery = (e) =>{
    if(e.keyCode == '13'){
        getResult(searchBar.value);
    }
}
let getResult = (cityName) =>{
    let query =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}
let displayResult = (result) =>{
    
    city.innerHTML = `${result.name}, ${result.sys.country}`

    temp.innerHTML = `${Math.round(result.main.temp)} C`

    desc.innerHTML = result.weather[0].description

    minmax.innerHTML =`${Math.round(result.main.temp_min)}C / ${Math.round(result.main.temp_max)}C`
}
searchBar.addEventListener('keypress', setQuery)
