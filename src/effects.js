$(document).ready(function() {

    // Init Controller
    var controller = new ScrollMagic.Controller();

    // Create Animation for 0.5s
    var tween = TweenMax.to('.logo', 0.5, {
        scale: 5,
        ease: Cubic.easeNone
    });

    // Create the Scene and trigger when visible with ScrollMagic
    var scene = new ScrollMagic.Scene({
        triggerElement: '.social',
        duration: 200,
        offset: 500
    })
    .setTween(tween)
    .addTo(controller);

});