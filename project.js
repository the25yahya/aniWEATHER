//variables 
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

  })




  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=london&units=metric&appid=98eb5417a82ab57df380d08e9d87372d`)
  .then(response => response.json())
  .then(data => console.log(data))

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

  
