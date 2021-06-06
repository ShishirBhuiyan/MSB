

$(document).ready(function(){
 $('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  $('.portfolio-menu ul li').click(function(){
     $('.portfolio-menu ul li').removeClass('active');
     $(this).addClass('active');

     var selector = $(this).attr('data-filter');
     $('.portfolio-item').isotope({
        filter:selector
     });
     return false;
  });
/* 
  $('.image').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });  */
 
  
 
 });//________$(document).ready(function(){}) Part End
 
 
 
 
 