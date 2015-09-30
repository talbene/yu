$(function() {

  "use strict";

  var topoffset = 50; //variable for menu height
  var slideqty = $('#featured .item').length;
  var wheight = ($(window).height());
   //get the height of the window
   var fheight = 0.2*($(window).height());


  var randSlide = Math.floor(Math.random()*slideqty);

  $('#featured .item').eq(randSlide).addClass('active');

  $('.fullheight').css('height', wheight); //set to window tallness  
  $('footer').css('height', fheight);


  //replace IMG inside carousels with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
  var wheight = ($(window).height());
    var fheight = 0.2*($(window).height());

    $('.fullheight').css('height', wheight); 

$('footer').css('height', fheight);
    //set to window tallness  
  });
 


  //Automatically generate carousel indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
    if (i === randSlide) {
      insertText += ' class="active" ';
    }
    insertText += '></li>';
    $('#featured ol').append(insertText);
  }

  $('.carousel').carousel({
    pause: false
  });

});