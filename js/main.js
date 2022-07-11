$(document).ready(function(){
  resize();
  $(window).on('resize', resize);
})

function resize() {
  //屏幕宽度发生变化改变banner
  var windowWidth = $(window).width();
  var isSmall = windowWidth < 840;
  var imgSrc = isSmall ? $('#header').data('image-sm') : $('#header').data('image-lg')
  $('#header').css('backgroundImage', 'url('+imgSrc+')');

  if (isSmall) { // 小于840px使用img元素添加banner
  	$('#header').html('<img src="'+imgSrc+'">')
  } else {
  	$('#header').empty();
  }
}
