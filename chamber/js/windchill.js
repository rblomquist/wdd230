let temp = parseFloat(document.querySelector(".temp").textContent);
let speed = parseFloat(document.querySelector(".speed").textContent);
let exponenet = Math.pow(speed, 0.16);

let windChill = 35.74 + (0.6215 * temp) - (35.75 * exponenet) + (0.4275 * temp * exponenet); 


if (temp <= 50 && speed >3) {
    document.querySelector(".chill").textContent = windChill; }

else {
    document.querySelector(".chill").textContent = "N/A"; }

console.log(temp);
console.log(speed);
console.log(windChill);