const dateForm = document.querySelector(".date-form");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const dayError = document.getElementById("error-day");
const monthError = document.getElementById("error-month");
const yearError = document.getElementById("error-year");

dateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  resetErrorFields()

  console.log("day:", day.value)
  console.log("month:", month.value)
  console.log("year:", year.value)


  handleBlanks(day, dayError);
  handleBlanks(month, monthError);
  handleBlanks(year, yearError);

//   if (day === "") {
//     dayError.textContent = "This field is required";
//   }

//   if (day < 1 || day > 31) {
//     dayError.textContent = "Must be a valid day";
//   }

//   if (isNaN(month) || month < 1 || month > 12) {
//     monthError.textContent = "Must be a valid month";
//   }

//   if (isNaN(year) || year < 1 || year > 2023) {
//     yearError.textContent = "Must be a valid year (i.e. in the past)";
//   }
});

function handleBlanks(field, fieldErrorMessage) {
  if (field.value === "") {
    fieldErrorMessage.classList.add("active");
    fieldErrorMessage.textContent = "This field is required";
  }
}

function resetErrorFields() {
    const errorMessages = document.querySelectorAll(".error-message");

    errorMessages.forEach(error => {
        error.classList.remove("active");
        error.textContent = "";
    })
}
