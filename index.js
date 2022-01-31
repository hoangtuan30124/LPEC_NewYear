//Counter

// Set the date we're counting down to
var countDownDate = new Date("Feb 1, 2022 00:00:00").getTime();

function setCountdown(days, hours, mins, secs) {
    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#mins").innerHTML = mins;
    document.querySelector("#secs").innerHTML = secs;
}

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    setCountdown(days, hours, minutes, seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        setCountdown(0, 0, 0, 0);
    }
}, 1000);