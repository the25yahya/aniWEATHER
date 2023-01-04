//variables 
const input = document.querySelector('.input');
const search = document.querySelector('.search');
const body = document.querySelector('.main-content');
const settings = document.getElementById('settings');
const units = document.getElementById('units-btn');
const lang = document.getElementById('lang-btn');
const widgetTemp = document.querySelector('.widget-temp');
const widgetWind = document.querySelector('.widget-wind')

//event listeners 
search.addEventListener('click',loaddata);
window.addEventListener('load',bodyData);




//functions 
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



  
