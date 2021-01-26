import Planet from "./planet"
import { convertAUtoKm } from "./unit_conversion"

let planets = [
  new Planet("Mercúrio", 0.39),
  new Planet("Vênus", 0.72),
  new Planet("Terra", 1),
  new Planet("Marte", 1.52),
  new Planet("Júpier", 5.2),
  new Planet("Saturno", 9.53),
  new Planet("Urano", 19.1),
  new Planet("Netuno", 30)
]

planets.forEach(planet => {
  let distanceFromSun = convertAUtoKm(planet.auToSum).toFixed(2)
  console.log(`${planet.name} - ${planet.auToSum}AU - ${distanceFromSun}km`)
})