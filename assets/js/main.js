// news slider settings
var settings = {
  gallery:true,
  item:1,
  vThumbWidth:320,
  thumbItem:4,
  thumbMargin:4,
  slideMargin:10,
  adaptiveHeight:false,
  useCSS:true,
  auto:true,
  loop:true,
  slideEndAnimation:true,
  controls:false,
  verticalHeight:400,
  pause:3000,
  onSliderLoad: function(){
    var array = [];
    var i = 0;
    $('.news-slider ul.lightSlider').children('li').each(function() {
      array.push($(this).html());
    });
    $('.news-slider ul.lSPager').children('li').each(function() {
      $(this).html(array[i+1]);
      $(this).prepend('<span class="progressBar"></span>')
      i++
    });
  },
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        thumbItem:2
      }
    }
  ]
}
function detectMob() {
  return ( window.innerWidth <= 1199 );
}
function detectSmallScreen() {
  return ( window.innerWidth <= 767 );
}
$(document).ready(function(){
  $('.navbar-toggler').click(function(){
      $('#collapsable-menu').toggle();
      $(this).toggleClass('active');
  });
  
  if(detectMob()){
    settings.vertical=false;
  }else{
    settings.vertical=true;
  }
  if(detectSmallScreen()){
    settings.gallery=false;
    settings.onSliderLoad='';
  }
  $('#vertical-posts-slider').lightSlider(settings);
  if(detectSmallScreen()){
    settings.adaptiveHeight=true;
    settings.onSliderLoad=function(){};
    $('#latest-posts').lightSlider(settings);
  }
});
