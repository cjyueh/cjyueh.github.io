var slideLeft = new Menu({
  wrapper: '#wrapper',
  type: 'slide-left',
  menuOpenerClass: '.hamburger',
  maskId: '#mask'
});
var slideLeftBtn = document.querySelector('#hamburger');

slideLeftBtn.addEventListener('mouseover', function(e) {
  e.preventDefault();
  slideLeft.open();
});

$('#top-arrow').click(function() {
   $("html, body").animate({ scrollTop: 0 }, 500);
});

