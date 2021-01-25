const Planet = require('./planet')
const Unit = require('./unit_conversion')

let planets = []

planets.push(new Planet('Mercúrio', 0.39, Unit.conversion(0.39).toFixed(2)))
planets.push(new Planet('Vênus', 0.72, Unit.conversion(0.72).toFixed(2)))
planets.push(new Planet('Terra', 1, Unit.conversion(1).toFixed(2)))
planets.push(new Planet('Marte', 1.52, Unit.conversion(1.52).toFixed(2)))
planets.push(new Planet('Júpiter', 5.2, Unit.conversion(5.2).toFixed(2)))
planets.push(new Planet('Saturno', 9.53, Unit.conversion(9.53).toFixed(2)))
planets.push(new Planet('Urano', 19.1, Unit.conversion(19.1).toFixed(2)))
planets.push(new Planet('Netuno', 30, Unit.conversion(30).toFixed(2)))

for(let i = 0; i < planets.length; i++) {
  console.log('Planeta: ' + planets[i].name + ', Distância em AU: ' + planets[i].distanceAU + ', Distância em KM: ' + planets[i].distanceKM)
}