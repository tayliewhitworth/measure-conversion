/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.285
const literToGal = 0.264
const kilToLb = 2.204

const input = document.getElementById('input')
const convert = document.getElementById('convert')
const lengthMeters = document.getElementById('length-meters')
const lengthLiters = document.getElementById('length-liters')
const lengthKilos = document.getElementById('length-kilos')

convert.addEventListener('click', function() {
    let baseValue = input.value
    lengthMeters.textContent = `${baseValue} meter(s) = ${Number(baseValue * meterToFeet).toFixed(2)} feet  |  ${baseValue} feet = ${Number(baseValue / meterToFeet).toFixed(2)} meter(s)` 
    
    lengthLiters.textContent = `${baseValue} liter(s) = ${Number(baseValue * literToGal).toFixed(2)} gallon(s)  |  ${baseValue} gallon(s) = ${Number(baseValue / literToGal).toFixed(2)} liter(s)`
    
    lengthKilos.textContent = `${baseValue} kilo(s) = ${Number(baseValue * kilToLb).toFixed(2)} pound(s)  |  ${baseValue} pound(s) = ${Number(baseValue / kilToLb).toFixed(2)} kilo(s)`
})