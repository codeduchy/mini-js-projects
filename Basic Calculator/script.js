const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.querySelector("#result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", (e) => {
    const buttonValue = buttonsEl[i].textContent;
  try {
    if(buttonValue == "C") {
          clearResult();
        } else if(buttonValue === "=") {
          calculateResult();
        } else {
          appendValue(buttonValue);
        }
  } catch (error) {
    console.log(error);
  }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}
function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}
function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}