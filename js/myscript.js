$(function() {

  "use strict";

  var slideqty = $('#featured .item').length;
  var wheight = ($(window).height());
   //get the height of the window

  $('#featured .item').eq(0).addClass('active');

  $('.fullheight').css('height', wheight); //set to window tallness  
 

  //replace IMG inside carousels with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });



  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
  var wheight = ($(window).height());

  $('.fullheight').css('height', wheight); 

    //set to window tallness  
  });
 


 

  
   
 
});