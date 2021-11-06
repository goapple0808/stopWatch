var second = 0;
var minute = 0;
var myInterval;
function handleNumber(number){
  var numberString;
  if(number <= 9){
    numberString = "0" + number;
  }
  else{
    numberString = number;
  }
  return numberString;
}

$("#start").click(function(){
  start();
  myInterval = setInterval(function(){
    start();
  }, 1000);
});

$("#stop").click(function(){
  clearInterval(myInterval);
});

$("#reset").click(function(){
  second = 0;
  minute = 0;
  var secondString = handleNumber(second);
  var minuteString = handleNumber(minute);
  $("p").text(minuteString + ":" + secondString);
  clearInterval(myInterval);
})

function start(){
  second++;
  if(second === 60){
    second = 0;
    minute++;
  }
  var secondString = handleNumber(second);
  var minuteString = handleNumber(minute);
  $("p").text(minuteString + ":" + secondString);
}
