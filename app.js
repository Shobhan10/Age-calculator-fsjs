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
  console.log(typeof dateOfBirth.getFullYear());
}

function calcAge() {}

function displayAge() {}
