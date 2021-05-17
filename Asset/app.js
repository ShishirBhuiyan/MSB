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



//<=========== Counter Up Animation =============>
const tooltips = document.querySelectorAll(".tooltips");
function runprogress() {
tooltips.forEach((o) => {
   o.innerText = 0;
   var e = +o.dataset.percent;
   var t = Math.ceil(e / 50);
   var n = function() {
       var l = +o.innerText;
       l < e ? ((o.innerText = l + t), (o.parentElement.style.width = o.innerText + "%"), setTimeout(n, 50)) : (o.innerText = +e + "%");
   };
   n();
});
}
var footerSection = document.querySelector("footer"),
options = {
rootMargin: "0px 0px 200px 0px"
};
const sectionObserver = new IntersectionObserver(function(o) {
runprogress();
}, options);
sectionObserver.observe(footerSection);
