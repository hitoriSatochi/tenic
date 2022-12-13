document.addEventListener("DOMContentLoaded", () => {
    const newYear = new Date("Jan 1 2023 00:00:00");
  
    const dayVal = document.querySelector(".count-days .counter-time");
    const hoursVal = document.querySelector(".count-hours .counter-time");
    const minuteVal = document.querySelector(".count-minute .counter-time");
    const secVal = document.querySelector(".count-sec .counter-time");
  
    const timeCount = () => {
      let now = new Date();
      let leftUntil = newYear - now;
  
      let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
      let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
      let sec = Math.floor(leftUntil / 1000) % 60;
  
      dayVal.innerText = days
      hoursVal.innerText = hours
      minuteVal.innerText = minutes
      secVal.innerText = sec
    };
    timeCount();
    setInterval(timeCount, 1000)
  });
  