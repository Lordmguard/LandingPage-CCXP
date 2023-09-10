const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minEl = document.getElementById("min")
const secondEl = document.getElementById("second")

const lancamento = "01 dec 2023"

function countdown(){

    const dataLanc = new Date (lancamento)
    const hoje = new Date ()

    const totalSeconds = (dataLanc - hoje)/1000;

    const days = Math.floor (totalSeconds / 3600 / 24) ;
    const hours = Math.floor (totalSeconds / 3600) %24 ;
    const min = Math.floor (totalSeconds / 60) %60 ;
    const second = Math.floor (totalSeconds) %60 ;

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatoTempo (hours)
    minEl.innerHTML = formatoTempo (min)
    secondEl.innerHTML = formatoTempo (second)
}

function formatoTempo( tempo){
    return tempo < 10? `0${tempo}`: tempo;
}

countdown();
setInterval(countdown, 1000);