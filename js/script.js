
// scrollspy
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy', '.parallax');
  var instances = M.ScrollSpy.init(elems, options);
});

// parallax
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.parallax');
//   var instances = M.Parallax.init(elems, options);
// });

$(document).ready(function(){
  $('.carousel').carousel();
});
$('.carousel.carousel-slider').carousel({fullWidth: true});