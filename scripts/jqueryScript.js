$(document).ready(function () {    
    //onload the planet gets smaller                    
$('.planet-img').delay(2000).animate({
    width: '250px',
    height: '250px'
}, 2000, function() {
    $('.planet-name').fadeIn(1000).css("display", "block");
    $('.planet-content').fadeIn(1000).css("display", "block");
    $('.youtube-container').fadeIn(1000).css("display", "block");
    $('#home').fadeIn(1000).css("display", "inline-block");
    $('#solar-system-button').fadeIn(1000).css("display", "inline-block");
    });
    //Makes astronaut shrink at the same time as the planet
    $('.astronaut-image-planet').delay(2000).animate({
        width: '35px',
        height: '35px',
    }, 2000)
});