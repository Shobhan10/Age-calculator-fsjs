// const container;
// const error;
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dobObj = {};
const dob = document.getElementById("dob");
/*
dob.oninput = () => {
  console.log(dob.value);
}; */

dob.addEventListener("input", getAge);

function getAge() {
  const dateOfBirth = new Date(dob.value);
  dobObj.dobYear = dateOfBirth.getFullYear();
  dobObj.dobMonth = dateOfBirth.getMonth() + 1;
  dobObj.dobDate = dateOfBirth.getDate();
}

function calcAge() {
  const today = new Date();
  const currnentYear = today.getFullYear;
  const currnentMonth = today.getMonth + 1;
  const currnentDate = today.getDate;

  leapYearCheck(currnentYear);
}

function displayAge() {}

function leapYearCheck(year) {
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}
