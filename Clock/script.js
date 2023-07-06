setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() * 6;
  const minutesRatio = currentDate.getMinutes() * 6;
  const hoursRatio = currentDate.getHours() * 30;
  
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}
setClock();
function setRotation(element, rotation) {
  element.style.setProperty('--rotation', rotation);
}