const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

// GET CURRENT YEAR
const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

//Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const difference = newYearTime - currentTime;
  //   console.log(difference);
  //The o/p of 'difference will come in milliseconds'
  const DAY = Math.floor(difference / 1000 / 60 / 60 / 24);
  const HOURS = Math.floor(difference / 1000 / 60 / 60) % 24;
  const MINUTES = Math.floor(difference / 1000 / 60) % 60;
  const SECONDS = Math.floor(difference / 1000) % 60;

  //   adding to elements
  days.innerHTML = DAY;
  //   using ternary operator to make '00' format
  hours.innerHTML = HOURS < 10 ? "0" + HOURS : HOURS;
  minutes.innerHTML = MINUTES < 10 ? "0" + MINUTES : MINUTES;
  seconds.innerHTML = SECONDS < 10 ? "0" + SECONDS : SECONDS;
}
//Show spinner before countdown
setTimeout(() => {
  // after 1 second, when the page loads, loading spinner will be removed.
  loading.remove();
  //  i.e after one second:  setting display:flex here,
  countdown.style.display = "flex";
}, 1000);

// we want to run updateCountdown() every second i.e 1s=1000ms, so we use  set-Interval and will call a function inside it with the interval of 1000ms

setInterval(updateCountdown, 1000);
