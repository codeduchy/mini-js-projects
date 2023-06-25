const timerEl = document.querySelector("#timer");
const startButtonEl = document.querySelector("#start");
const stopButtonEl = document.querySelector("#stop");
const resetButtonEl = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  console.log(startTime);
  console.log(elapsedTime);

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

function formatTime(elapsedTime) {
  const miliseconds = Math.floor((elapsedTime % 1000) / 10);
  let seconds = Math.floor((elapsedTime / 1000));
  const min = Math.floor(elapsedTime / 60000);
  const hour = Math.floor(elapsedTime / 3600000);
  if(seconds > 59) {
    seconds =0;
  }
  return (hour > 9 ? hour : "0" + hour) +":" +(min > 9 ? min : "0" + min) +":" +(seconds > 9 ? seconds : "0" + seconds) + ":" +(miliseconds > 9 ? miliseconds : "0" + miliseconds);
}

function stopTimer() {
  clearInterval(timerInterval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;;
}
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerEl.textContent = "00:00:00:00";
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;;
}

startButtonEl.addEventListener("click", ()=> startTimer());
stopButtonEl.addEventListener("click", ()=> stopTimer());
resetButtonEl.addEventListener("click", ()=> resetTimer());
