
	
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
	  fade: true,
	  asNavFor: '.nav-row'
	});
	$('.nav-row').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.main-cont',
	  dots: false,
	  arrows: false,
	  centerMode: true,
	  focusOnSelect: true,
       responsive: [
    {
      breakpoint:600,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        
      }
    },
    ]
   	});
	});
