const horas = document.getElementById('horas'); // criei um variavel "const" pegeui com document.getElementById a variavel('horas')
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){ // criei um função para mostar as horas com "time"
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes('');
    let sgd = dateToday.getSeconds();

    if( hr < 10) hr = '0' + hr;

    if( min < 10) min = '0' + min;

    if( sgd < 10) sgd = '0' + sgd;

    horas.textContent = hr;  // .textContent serve para pegar a tag texto e altera-la
    minutos.textContent = min;
    segundos.textContent = sgd;

})