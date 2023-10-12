const dateForm = document.querySelector(".date-form");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const dayError = document.getElementById("error-day");
const monthError = document.getElementById("error-month");
const yearError = document.getElementById("error-year");

const dayDiffText = document.getElementById("days-diff");
const monthDiffText = document.getElementById("months-diff");
const yearDiffText = document.getElementById("years-diff");

dateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  resetErrorFields();

  const dateEntered = new Date(
    year.value + "-" + month.value + "-" + day.value
  );

  const currentDate = new Date();

  if (isNaN(dateEntered)) {
    handleBlanks(day, dayError);
    handleBlanks(month, monthError);
    handleBlanks(year, yearError);

    handleIncorrectValue(day, dayError, 1, 31);
    handleIncorrectValue(month, monthError, 1, 12);
    handleIncorrectValue(year, yearError, 1, 2023);
  } else {
    dateDiff(dateEntered, currentDate);
  }
});

function handleBlanks(field, fieldErrorMessage) {
  if (field.value === "") {
    fieldErrorMessage.classList.add("active");
    fieldErrorMessage.textContent = "This field is required";
  }
}

function handleIncorrectValue(field, fieldErrorMessage, min, max) {
  if (!isNaN(field.value)) {
    if (
      (Number(field.value) && Number(field.value) < min) ||
      Number(field.value) > max
    ) {
      fieldErrorMessage.classList.add("active");
      fieldErrorMessage.textContent = "Not a valid date";
    }
  } else {
    fieldErrorMessage.classList.add("active");
    fieldErrorMessage.textContent = "Not a valid date";
  }
}

function resetErrorFields() {
  const errorMessages = document.querySelectorAll(".error-message");

  errorMessages.forEach((error) => {
    error.classList.remove("active");
    error.textContent = "";
  });
}

function dateDiff(startingDate, endingDate) {
  let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
  if (!endingDate) {
    endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
  }
  let endDate = new Date(endingDate);
  if (startDate > endDate) {
    const swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  const startYear = startDate.getFullYear();
  const february =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
      ? 29
      : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let yearDiff = endDate.getFullYear() - startYear;
  let monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  let dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }

  dayDiffText.textContent = dayDiff
  monthDiffText.textContent = monthDiff
  yearDiffText.textContent = yearDiff

  return yearDiff + "Y " + monthDiff + "M " + dayDiff + "D";
}
