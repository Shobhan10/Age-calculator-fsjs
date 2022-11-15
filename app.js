// const container;
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
  dobObj.year = dateOfBirth.getFullYear();
  dobObj.month = dateOfBirth.getMonth() + 1;
  dobObj.date = dateOfBirth.getDate();
  calcAge();
}

function calcAge() {
  const today = new Date();
  const currnentYear = today.getFullYear();
  const currnentMonth = today.getMonth() + 1;
  const currnentDate = today.getDate();

  let ageYears, ageMonths, ageDays;

  leapYearCheck(currnentYear);

  if (currnentYear >= dobObj.year) {
    ageYears = currnentYear - dobObj.year;
  } else {
    ageYears = -1;
  }

  if (currnentMonth >= dobObj.month && currnentYear >= dobObj.year) {
    ageMonths = currnentMonth - dobObj.month;
  } else {
    ageYears = ageYears - 1;
    ageMonths = currnentMonth + 12 - dobObj.month; // suppose -> [August(8) + 12] - November(11) = 9
  }

  if (currnentDate >= dobObj.date && currnentMonth >= dobObj.month) {
    ageDays = currnentDate - dobObj.date;
  } else {
    ageMonths = ageMonths - 1;
                                                                      // previousMonth = currentMonth - 1 = 8(Aug) -1 = 7(July)
    let daysOfPreviousMonth = months[(currnentMonth - 1) - 1]        // months[7 - 1] = months[6] = 31 = July => array indexing starting from 0  
    ageDays = (daysOfPreviousMonth - dobObj.date) + currnentDate;    // suppose -> (31 - 26) + 9 = 14

    if(ageMonths < 0) {
      ageMonths = 11;
      ageYears = ageYears - 1;
    }
  }
  displayAge(ageYears, ageMonths, ageDays);
}

function displayAge(years, months, days) {
  if (years < 0 || months < 0 || days < 0) {
    document.querySelector(".desc").style.display = "none";
    document.querySelector(".age").style.display = "none";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error").textContent = "Welcome Time Traveller";
  } else if (years === 0 && months === 0 && days === 0) {
    document.querySelector(".error").textContent = "Congratulations! You born today";
    document.querySelector(".desc").style.display = "none";
    document.querySelector(".age").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".desc").style.display = "block";
    document.querySelector(".age").style.display = "block";
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
  }
}

function leapYearCheck(year) {
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}
