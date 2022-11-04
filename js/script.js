let min = document.querySelector(".m"),
  hour = document.querySelector(".h"),
  sec = document.querySelector(".s"),
  hourClock = document.querySelector(".hours"),
  minClock = document.querySelector(".minutes"),
  secClock = document.querySelector(".seconds");

function clock() {
  let time = new Date();
  let seconds = time.getSeconds() * 6;
  let minutes = time.getMinutes() * 6;
  let hours = time.getHours() * 30;

  sec.style = `transform: rotate(${seconds}deg)`;
  min.style = `transform: rotate(${minutes}deg)`;
  hour.style = `transform: rotate(${hours}deg)`;

  hourClock.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  minClock.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  secClock.innerHTML = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  setTimeout(() => clock(), 1000);
}

clock();
///////////////////////////////////////////////////////////////////////
let stopwatch__hours = document.querySelector(".stopwatch__hours"),
  stopwatch__minutes = document.querySelector(".stopwatch__minutes"),
  stopwatch__seconds = document.querySelector(".stopwatch__seconds"),
  stopwatch__btn = document.querySelector(".stopwatch__btn"),
  tabsLink__span = document.querySelector(".tabsLink__span");

stopwatch__btn.addEventListener("click", () => {
  if (stopwatch__btn.innerHTML == "start") {
    stopwatch__btn.innerHTML = "stop";
    tabsLink__span.classList.add("active");
    timer();
  } else if (stopwatch__btn.innerHTML == "stop") {
    stopwatch__btn.innerHTML = "clear";
    tabsLink__span.classList.remove("active");
    tabsLink__span.classList.add("active_clear");
  } else if (stopwatch__btn.innerHTML == "clear") {
    stopwatch__btn.innerHTML = "start";
    tabsLink__span.classList.remove("active_clear");
    stopwatch__hours.innerHTML = 0;
    stopwatch__minutes.innerHTML = 0;
    stopwatch__seconds.innerHTML = 0;
  }
});

function timer() {
  if (stopwatch__btn.innerHTML == "stop") {
    stopwatch__seconds.innerHTML++;
    setTimeout(() => {
      if (stopwatch__seconds.innerHTML > 59) {
        stopwatch__seconds.innerHTML = 0;
        stopwatch__minutes.innerHTML++;
      } else if (stopwatch__minutes.innerHTML > 59) {
        stopwatch__minutes.innerHTML = 0;
        stopwatch__hours.innerHTML++;
      }
      timer();
    }, 1000);
  }
}

// setTimeout(() => {
//   console.log('hello');
// },2000)

// рекурсия это когда функция вызывает саму себя

// let i = 0;

// function rek() {
//   console.log(i);
//   if(i < 100) {
//     i++
//     rek()
//   }
// }
// rek()

let links = document.querySelectorAll(".tabsItem");
let tabs = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    for (let x = 0; x < links.length; x++) {
      links[x].classList.remove("active");
      tabs[x].classList.remove("active");
    }
    links[i].classList.add("active");
    tabs[i].classList.add("active");
  });
}
