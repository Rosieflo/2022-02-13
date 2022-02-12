$(document).ready(function(){

  let gnb = $('.gnb > ul > li');

  gnb.mouseenter(function(){
    $(this).find('.sub').stop().slideDown();
  });

  gnb.mouseleave(function(){
    $('.sub').stop().slideUp();
  });

  
  // 이미지 슬라이드
  $('.slide > ul > li:last-child').insertBefore('.slide > ul > li:first-child');

  $('.slide > ul').css('margin-left','-900px');

  function moveSlide(){
    $('.slide > ul').animate({'margin-left':'-1800px'},500,function(){
      $('.slide > ul > li:first-child').insertAfter('.slide > ul > li:last-child');
      $('.slide > ul').css('margin-left','-900px');
    });
  }

  let Timer = setInterval(moveSlide,3000);

});