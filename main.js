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

var mobile = (navigator.userAgent.match(/(iPad|iPhone|Android)/g) ? true : false);

$('#top-arrow').click(function() {
  if (mobile) {
    $("html, body", parent.document).animate({ scrollTop: 0 }, 100);
  } else {
    $("html, body").animate({ scrollTop: 0 }, 500);
  }
});

