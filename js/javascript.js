var groen = 0, rood = 0;
var afgelopen = true;
var myTimeout;


// op keypresses rood en groen 
$(this).on('keypress', function (event) {
    if (!afgelopen) {
        if (event.keyCode == 82) {
            //  alert('Rood gedrukt!')
            rood++;
            document.getElementById("teller2").innerHTML = rood;
            $('#antw2Txt').addClass('animated tada').one('animationend', function () {
                $(this).removeClass('animated tada')
            });
        }
        if (event.keyCode == 71) {
            //  alert('Groen gedrukt!') 
            groen++;
            document.getElementById("teller1").innerHTML = groen;
            $('#antw1Txt').addClass('animated tada').one('animationend', function () {
                $(this).removeClass('animated tada')
            });
        }
    }
})

// timer die aftelt 
function countdown(minutes) {
    afgelopen = false;
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("countdown");
        var current_minutes = mins - 1
        seconds--;
        counter.innerHTML = (current_minutes < 10 ? "0" : "") + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            myTimeout = setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countdown(mins - 1);
            } else {
                //  $('.modal-wrapper').toggleClass('open');
                // $('.page-wrapper').toggleClass('blur-it');
                afgelopen = true;
                return false;
            }
        }
    }
    tick();
}

//timer stoppen
function stop() {
    afgelopen = true;
    clearTimeout(myTimeout);
}

function reset() {
    //textvakken leegmaken
    $('#vraagTxt').val('');
    $('#antw1Txt').val('');
    $('#antw2Txt').val('');

    //waarden voor rood en groen en countdown resseten en displayen
    groen = 0;
    rood = 0;
    document.getElementById("teller1").innerHTML = groen;
    document.getElementById("teller2").innerHTML = rood;
    document.getElementById("countdown").innerHTML = "05:00";
}

// voor eventueel afgelopen modal 
$(document).ready(function () {
    $('.trigger').on('click', function () {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        return false;
    });
});

$(document).ready(function () {
    // zorgen dat tekst in het midden wordt geplaatst in de tekstvakken
    setVerticalAlign('#antw1Txt');
    setVerticalAlign('#antw2Txt');
    setVerticalAlign('#vraagTxt');
});

function setVerticalAlign(input) {
    $(input).on('input', function () {
        var h = this.offsetHeight;
        $(this).css({   //clear current padding and height so we can use scrollHeight below
            paddingTop: 0,
            height: 0
        });
        $(this).css({
            paddingTop: Math.max(0, h / 2 - this.scrollHeight / 2),
            height: h
        });
    });
}
