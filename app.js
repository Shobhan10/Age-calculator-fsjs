// const container;
// const error;

const dob = document.getElementById("dob");

/*
dob.oninput = () => {
  console.log(dob.value);
}; */

dob.addEventListener("input", getAge);

function getAge() {
  const dateOfBirth = new Date(dob.value);
  const dobYear = dateOfBirth.getFullYear();
  const dobMonth = dateOfBirth.getMonth() + 1;
  const dobDate = dateOfBirth.getDate();
  calcAge(dobYear, dobMonth, dobDate);
}

function calcAge() {}

function displayAge() {}
