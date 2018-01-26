document.addEventListener("DOMContentLoaded", function() {
  var redrawClock = function() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var secondDegree = second * 360 / 60;
    var minuteDegree = (minute * 360 / 60) + (secondDegree / 60);
    var hourDegree = (hour * 360 / 12) + (minuteDegree / 60);

    document.getElementById('year').textContent = moment(date).format('YYYY');
    document.getElementById('month').textContent = moment(date).format('MMM');
    document.getElementById('day').textContent = moment(date).format('DD');
    document.getElementById('hour').style.transform = "rotate(" + hourDegree + "deg)";;
    document.getElementById('minute').style.transform = "rotate(" + minuteDegree + "deg)";;
    document.getElementById('second').style.transform = "rotate(" + secondDegree + "deg)";;
  }

  redrawClock();

  var timeout = setInterval(function() {
    redrawClock();
  }, 1000);

});
