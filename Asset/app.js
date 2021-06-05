$(document).ready(function() {

    //<=========== Get Some Data from json file start =============>
    $.ajax({
        url:"https://shishirbhuiyan.github.io/json/my.json",
        type:"GET",
        success: function(data){
            $('#aboutTextTwo').text(data.about.textTwo);
            $('#aboutImageTwo').css("background-image", "url(" + data.about.imageOne + ")");
            $('.pop-overlay').css("background-image", "url(" + data.about.popImage + ")");

            for(var i=1;i<=data.portfolio.length;i++){
                $("#ok .image._"+i+"").attr("href",data.portfolio[i-1].image);
                $("#ok .item._"+i+"").addClass(data.portfolio[i-1].type);
                $("#ok .item._"+i+" .portimage").css({
                    "background-image": "url(" + data.portfolio[i-1].image + ")",
                    "height": "100%",
                    "width": "100%",
                    "background-size": "cover",
                    "background-repeat": "no-repeat",
                });
                $("#ok .item._"+i+" h4").text(data.portfolio[i-1].text);
            }
        }
    });
    //<=========== Get Some Data from json file End =============>




    //<===========Animate on Scroll =============>
    AOS.init();

    
    //<=========== Hide & Show TopBottom =============>
    $(window).scroll(function() {
        $(this).scrollTop() > 200 ? $(".topbottom").fadeIn() : $(".topbottom").fadeOut();
    });
    
    //<=========== TopBottom Click =============>
    $(".topbottom").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 100);
    });
    

    //<=========== Hamburger Click =============>
    $(".menu").click(function() {
        $(".menu .line").toggleClass("active");
         $("header").toggleClass("open");
    });
    //<=========== Menu Click =============>
    $(".nav__item").click(function() {
        $(".menu .line").toggleClass("active");
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



/*   $('.portfolio_wrapper').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  $('.tabs ul li').click(function(){
     $('.tabs ul li').removeClass('active');
     $(this).addClass('active');

     var selector = $(this).attr('data-filter');
     $('.portfolio_wrapper').isotope({
        filter:selector
     });
     return false;
  });

  $('.venobox').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  }); */

});//<=========== Jquery End =============>

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
