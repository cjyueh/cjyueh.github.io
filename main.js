var slideLeft = new Menu({
  wrapper: '#wrapper',
  type: 'slide-left',
  menuOpenerClass: '.hamburger',
  maskId: '#mask'
});
var slideLeftBtn = document.querySelector('#hamburger');

slideLeftBtn.addEventListener('click', function(e) {
  e.preventDefault();
  slideLeft.open();
});