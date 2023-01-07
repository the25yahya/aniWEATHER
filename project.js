//variables 
const max = document.querySelectorAll('.max');
const min = document.querySelectorAll('.min');
const maindesc = document.getElementById('widget-desc-info');
const sunset = document.getElementById('sunset-info');
const sunrise = document.getElementById('sunrise-info');
const humidity = document.getElementById('humidity-info');
const visibility = document.getElementById('visibility-info');
const pressure = document.getElementById('pressure-info');
const input = document.querySelector('.input');
const search = document.querySelector('.search');
const body = document.querySelector('.main-content');
const settings = document.getElementById('settings');
const units = document.getElementById('units-btn');
const lang = document.getElementById('lang-btn');
const widgetTemp = document.querySelector('.widget-temp');
const widgetWind = document.querySelector('.widget-wind');
const langParam = document.querySelector('.lang-param');
const unitsParam = document.querySelector('.units-param');
var unitstate = 'standard'
var langstate = 'eng'
var unitsButtonState = 'down'
var langButtonState = 'down'
//event listeners 
search.addEventListener('click',loaddata);
window.addEventListener('load',bodyData);
units.addEventListener('click',function(){
if(unitsButtonState==='down'){
  unitsParam.classList.add('show');
  units.classList.add('flip-upside-down');
  unitsButtonState = 'up'
}else{
  unitsParam.classList.remove('show');
  units.classList.remove('flip-upside-down');
  unitsButtonState = 'down'
}
} )
///////////////////////////////////////////////////
lang.addEventListener('click',function(){
  if(langButtonState==='down'){
    langParam.classList.add('show');
    lang.classList.add('flip-upside-down');
    langButtonState = 'up'
  }else{
    langParam.classList.remove('show');
    lang.classList.remove('flip-upside-down');
    langButtonState = 'down'
  }
  } )




//functions 
function bodyData(){

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&cnt=20&units=metric&appid=98eb5417a82ab57df380d08e9d87372d`)
  .then(response => response.json())
  .then(function(data){
    console.log(data);
    widgetTemp.innerText= data.main.temp+'°c';
    widgetWind.innerText = 'wind : '+ data.wind.speed + 'm/s'
    humidity.innerHTML=data.main.humidity+'%';
    maindesc.innerHTML=data.weather[0].description
    pressure.innerHTML=data.main.pressure;
    visibility.innerHTML=data.visibility+'mb';
    let sunrisemiliseconds = data.sys.sunrise;
    let sunriseDate = new Date(sunrisemiliseconds);
    let hours = sunriseDate.getHours();
    let minutes = sunriseDate.getMinutes();
    let time_string = hours + ':' + minutes + ' AM';
    sunrise.innerHTML=time_string;
    let sunsetmiliseconds = data.sys.sunset;
    console.log(sunsetmiliseconds)
    let sunsetDate = new Date(sunsetmiliseconds);
    let hours2 = sunriseDate.getHours();
    let minutes2 = sunriseDate.getMinutes();
    let time_string2 = hours2 + ':' + minutes2 + ' PM';

     sunset.innerHTML=time_string2;

  })
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&units=metric&appid=98eb5417a82ab57df380d08e9d87372d`)
  .then(response => response.json())
  .then(function(data) {
    console.log(data);
    const arraymax = [data.list[0].main.temp_max,data.list[1].main.temp_max,data.list[2].main.temp_max,data.list[3].main.temp_max,data.list[4].main.temp_max,data.list[5].main.temp_max]
    console.log(arraymax);
    max.forEach((element,index) => {
      if (index < arraymax.length) {
        element.innerHTML = arraymax[index] + '°c';
      }
    });


    const arraymin = [data.list[0].main.temp_min,data.list[1].main.temp_min,data.list[2].main.temp_min,data.list[3].main.temp_min,data.list[4].main.temp_min,data.list[5].main.temp_min]
    console.log(arraymin);
    min.forEach((element,index) => {
      if (index < arraymin.length) {
        element.innerHTML = arraymin[index] + '°c';
      }
    });


  })

}

function loaddata(){
  let value = input.value;
  if(value){
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&cnt=20&units=metric&appid=98eb5417a82ab57df380d08e9d87372d`)
    .then(response => response.json())
    .then(data => console.log(data))
  
  }else{
     alert('please enter an accurate city name')
  }
  };

  
