var hour = document.querySelector("#hour");
var second = document.querySelector("#second");
var minute = document.querySelector("#minute");

var hourDegree = 0;
var secondDegree = 0;
var minuteDegree = 0;

function rotate(element, degrees) {
  element.style.transform = "rotate(" + degrees + "deg)";
}

function rotateSecond() {
  secondDegree = secondDegree + 6;
  second.style.transform = "rotate(" + secondDegree + "deg)";
}

function rotateMinute() {
  minuteDegree = minuteDegree + 6;
  minute.style.transform = "rotate(" + minuteDegree + "deg)";
}

function rotateHour() {
  hourDegree = hourDegree + 6;
  hour.style.transform = "rotate(" + hourDegree + "deg)";
}

setInterval(function() {
  rotateSecond();
}, 1000);

// I don't know why this rotates before 60 seconds are up at the start
// but after about 4 minutes it is right on track
setInterval(function() {
  rotateMinute();
}, 60000);
setInterval(function() {
  rotateHour();
}, 60000 * 12);


// attempt at using the Date object
/*

var hour = document.querySelector("#hour");
var second = document.querySelector("#second");
var minute = document.querySelector("#minute");

var now = new Date();

var hourDegree = now.getHours() * 6;
var secondDegree = now.getSeconds() * 6;
var minuteDegree = now.getMinutes() * 6;

console.log(typeof hourDegree);

console.log(hour);

function rotateSecond() {
  secondDegree = secondDegree + 6;
  second.style.transform = "rotate(" + secondDegree + "deg)";
}

function rotateMinute() {
  minuteDegree = minuteDegree + 6;
  minute.style.transform = "rotate(" + minuteDegree + "deg)";
}

function rotateHour() {
  hourDegree = hourDegree + 6;
  hour.style.transform = "rotate(" + hourDegree + "deg)";
}

setInterval(function() {
  rotateSecond();
}, 1000);
// I don't know why this rotates before 60 seconds are up at the start
// but after about 4 minutes it is right on track
setInterval(function() {
  rotateMinute();
}, 60000);
setInterval(function() {
  rotateHour();
}, 60000 * 12);

*/
