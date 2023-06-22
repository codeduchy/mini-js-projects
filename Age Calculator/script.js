const btnEl = document.querySelector("button");
const birthdayEl = document.querySelector("#birthday");
const resultEl = document.querySelector("#results");

function calculateAge() {
  const bValue = birthdayEl.value;
  if(bValue == "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(bValue);
    resultEl.textContent = `Your age is ${age} year/s old`;
  }
}

function getAge(bValue) {
  const currentDate = new Date();
  const bDate = new Date(bValue);
  const month = currentDate.getMonth() - bDate.getMonth();
  let age = currentDate.getFullYear() - bDate.getFullYear();
  if(month<0 || month === 0 && currentDate.getDate() < bDate.getDate()) {
    age--;
  }
  return age;
}

btnEl.addEventListener("click", calculateAge);

