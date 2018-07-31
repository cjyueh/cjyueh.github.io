$('.link-home').click(function(e) {
  e.preventDefault();
  console.log('home clicked');
  if ($('.home').hasClass('show')) {
    $('.home').removeClass('show');
    $('.yoga').removeClass('position-2');
    $('.ux').removeClass('position-4');
    $('.yoga').removeClass('position-1');
    $('.yoga').removeClass('show');
    $('.yoga').removeClass('position-4');
    $('.yoga').removeClass('position-5');
    $('.home').removeClass('position-1');
    $('.home').removeClass('position-2');
    $('.home').removeClass('position-4');
    $('.home').removeClass('position-5');
    $('.ux').removeClass('position-1');
    $('.ux').removeClass('position-2');
    $('.ux').removeClass('show');
    $('.ux').removeClass('position-5');
  } else {
    $('.yoga').addClass('position-2');
    $('.home').addClass('show');
    $('.ux').addClass('position-4');
    $('.yoga').removeClass('position-1');
    $('.yoga').removeClass('show');
    $('.yoga').removeClass('position-4');
    $('.yoga').removeClass('position-5');
    $('.home').removeClass('position-1');
    $('.home').removeClass('position-2');
    $('.home').removeClass('position-4');
    $('.home').removeClass('position-5');
    $('.ux').removeClass('position-1');
    $('.ux').removeClass('position-2');
    $('.ux').removeClass('show');
    $('.ux').removeClass('position-5');
  }
});

$('.link-ux').click(function(e) {
  e.preventDefault();
  console.log('ux clicked');
  if ($('.ux').hasClass('show')) {
    $('.ux').removeClass('show');
  } else {
    $('.yoga').addClass('position-1');
    $('.home').addClass('position-2');
    $('.ux').addClass('show');
    $('.yoga').removeClass('position-2');
    $('.yoga').removeClass('show');
    $('.yoga').removeClass('position-4');
    $('.yoga').removeClass('position-5');
    $('.home').removeClass('position-1');
    $('.home').removeClass('show');
    $('.home').removeClass('position-4');
    $('.home').removeClass('position-5');
    $('.ux').removeClass('position-1');
    $('.ux').removeClass('position-2');
    $('.ux').removeClass('position-4');
    $('.ux').removeClass('position-5');
  }
});

$('.link-yoga').click(function(e) {
  e.preventDefault();
  console.log('yoga clicked');
  if ($('.yoga').hasClass('show')) {
    $('.yoga').removeClass('show');
  } else {
    $('.yoga').addClass('show');
    $('.home').addClass('position-4');
    $('.ux').addClass('position-5');
    $('.yoga').removeClass('position-1');
    $('.yoga').removeClass('position-2');
    $('.yoga').removeClass('position-4');
    $('.yoga').removeClass('position-5');
    $('.home').removeClass('position-1');
    $('.home').removeClass('position-2');
    $('.home').removeClass('show');
    $('.home').removeClass('position-5');
    $('.ux').removeClass('position-1');
    $('.ux').removeClass('position-2');
    $('.ux').removeClass('position-4');
    $('.ux').removeClass('show');
  }
});
