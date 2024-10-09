const birthdayEl = document.getElementById("age");
const CalculateAgeEl = document.getElementById("calculate");
const resultEl =  document.getElementById("currentAge");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `${age}`
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();  //gets the current date
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

CalculateAgeEl.addEventListener("click", calculateAge);