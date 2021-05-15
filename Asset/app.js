$(document).ready(function() {

    //<===========Animate on Scroll =============>
    AOS.init();


    //<=========== Hamburger Click =============>
    $(".toggle").click(function() {
        $(".toggle .line").toggleClass("active");
         $("header").toggleClass("open");
    });

    //<=========== Ropples Effect =============>
    $(".profile").ripples({
        resolation: 512,
        dropRadius: 10
    });
    $(".footer").ripples({
        resolation: 512,
        dropRadius: 10
    });
    $("#body").ripples({
        resolation: 512,
        dropRadius: 10
    });


});