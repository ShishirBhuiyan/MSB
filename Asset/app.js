$(document).ready(function() {

    //<=========== Hamburger Click =============>
    $(".toggle").click(function() {
        $(".toggle .line").toggleClass("active");
         $("header").toggleClass("open");
    });



});