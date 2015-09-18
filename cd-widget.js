var eventTitle = document.getElementById('title-event');

eventTitle.innerText = 'Testings';

// var countdownObject = countdown(null, new Date(2015, 11, 20));
var countdownObject = countdown(new Date(2015, 11, 20), function(ts) {
  document.getElementById('countdown').innerHTML = ts.toHTML();
});