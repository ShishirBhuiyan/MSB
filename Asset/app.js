$(document).ready(function() {

    //<===========Animate on Scroll =============>
    AOS.init();


    //<=========== Hamburger Click =============>
    $(".toggle").click(function() {
        $(".toggle .line").toggleClass("active");
         $("header").toggleClass("open");
    });
    //<=========== Menu Click =============>
    $(".nav__item").click(function() {
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

//<=========== Read More =============>
function ReadMore() {
    $(".pop-overlay").toggleClass("openoverlay");
    document.getElementById("popup").classList.toggle("active");
}