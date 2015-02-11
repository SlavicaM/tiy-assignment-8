
function myClock() {
  
  var date = new Date();

    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours   = date.getHours();

    // add zero to single digit
    if (hours < 10) {
        hours = "0" + hours;
    }
    // add zero to single digit
    if (minutes < 10) {
        minutes = "0" + minutes;
     }
    // add zero to single digit
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

// put variable's(hours,minutes,sec) output into an array
// and assign value to a valiable named output
  var output = [hours, minutes, seconds].join(":");

    //jquery
    //set clock text 
    $(".myClock").text(output);
}
// show time
setInterval(myClock, 1000)
