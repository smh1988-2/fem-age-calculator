const dateForm = document.querySelector(".date-form");
const day = document.getElementById("day").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;

const dayError = document.querySelector(".error-day");
const monthError = document.querySelector(".error-month");
const yearError = document.querySelector(".error-year");

dateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(day);
  if (isNaN(day) || day < 1 || day > 31) {
    dayError.textContent = "Must be a valid day";
  } 

  if (isNaN(month) || month < 1 || month > 12) {
    monthError.textContent = "Must be a valid day";
  } 

  if (isNaN(year) || year < 1 || year > 2023) {
    yearError.textContent = "Must be a valid year (i.e. in the past)";
  } 
});
