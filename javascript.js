var groen = 0, rood = 0;
var afgelopen = true;


$(this).on('keypress', function (event) {
    if (!afgelopen) {
        if (event.keyCode == 82) {
            //  alert('Rood gedrukt!')
            rood++;
            document.getElementById("teller2").innerHTML = rood;
        }
        if (event.keyCode == 71) {
            //  alert('Groen gedrukt!') 
            groen++;
            document.getElementById("teller1").innerHTML = groen;
        }
    }
})

function countdown(minutes) {
    afgelopen = false;
    groen = 0;
    rood = 0;
    document.getElementById("teller1").innerHTML = groen;
    document.getElementById("teller2").innerHTML = rood;

    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("countdown");
        var current_minutes = mins - 1
        seconds--;
        counter.innerHTML = (current_minutes < 10 ? "0" : "") + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countdown(mins - 1);
            } else {
                console.log("Timer gedaan");
                $('.modal-wrapper').toggleClass('open');
                $('.page-wrapper').toggleClass('blur-it');
                afgelopen = true;
                return false;
            }
        }
    }
    tick();
}