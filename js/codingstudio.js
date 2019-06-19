
	
	function openNav() {
	  document.getElementById("mySidenav").style.width = "100%";
	}
	function closeNav() {
	  document.getElementById("mySidenav").style.width = "0";
	}
	// slider-main
	$(document).ready(function(){
  
 $('.main-cont').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.nav-row'
});
$('.nav-row').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.main-cont',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
});
