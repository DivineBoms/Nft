	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});




$(document).ready(function(){

    // mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol:'-'
        });
    };
});

	 let num1 = document.querySelector('.num1')
	 let num2 = document.querySelector('.num2')
	 let num3 = document.querySelector('.num3')
	 
	 const CounterUpAnimation = (number , start,end ,duration)=>{
		let startTimestamp = null;
		const step = (tiemstamp)=>{
		 if(!startTimestamp){
			 startTimestamp = tiemstamp
		 }
	 
		 let prograss = Math.min((tiemstamp - startTimestamp) / duration , 1)
		 number.innerHTML = Math.floor(prograss * (end - start) + start) + 'k+'
	 
		 if(prograss <1){
			 window.requestAnimationFrame(step)
		 }
		} 
		window.requestAnimationFrame(step)
	 }

	 setTimeout(()=>{
		CounterUpAnimation(num1 , 0 , 100 , 5000)
		CounterUpAnimation(num2 , 0 , 32 , 2000)
		CounterUpAnimation(num3 , 0 , 50 , 3000)
	} , 1000)
	
	
	      //mean menu
          $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });
	 
         // search form
         $(".search-bar-icon").on("click", function(){
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function() {
            $(".search-area").removeClass("search-active");
        });

    /*-------------------------------------
        OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        smDevice2 = owlCarousel.data('ipad-device2'),
        smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
        smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
        mdDevice = owlCarousel.data('md-device'),
        centerMode = owlCarousel.data('center-mode'),
        HoverPause = owlCarousel.data('hoverpause'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            center: (centerMode ? true : false),
            autoplayHoverPause: (HoverPause ? true : false),
            margin: (margin ? margin : 0),
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    center: false,
                },
                768: {
                    items: (smDevice2 ? smDevice2 : 2),
                    center: false,
                },
                992: {
                    items: (smDevice ? smDevice : 3),
                    center: false,
                },
                1200: {
                    items: (mdDevice ? mdDevice : 4),
                }
            }
        });
    });

	 //CountDown Timer
	 var CountTimer = $('.CountDownTimer');
	 if(CountTimer.length){ 
		 $(".CountDownTimer").TimeCircles({
			 fg_width: 0.030,
			 bg_width: 0.8,
			 circle_bg_color: "#009ff9",
			 circle_fg_color: "#009ff9",
			 time: {
				 Days:{
					 color: "#fbc02d"
				 },
				 Hours:{
					 color: "#fbc02d"
				 },
				 Minutes:{
					 color: "#fbc02d"
				 },
				 Seconds:{
					 color: "#fbc02d"
				 }
			 }
		 }); 
	 }
        // image loaded portfolio init
    var gridfilter = $('.grid');
    if(gridfilter.length){
    $('.grid').imagesLoaded(function() {
        $('.gridFilter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    });
}   ;
  
        // project Filter
        if ($('.gridFilter button').length) {
            var projectfiler = $('.gridFilter button');
                if(projectfiler.length){
                $('.gridFilter button').on('click', function(event) {
                    $(this).siblings('.active').removeClass('active');
                    $(this).addClass('active');
                    event.preventDefault();
                });
            }
        };
        

        $(".col-lg-4").slice(0, 3).show()
        $(".btn3").on("click", function(){
             $(".col-lg-4:hidden").slice(0, 3).slideDown()
             if ($(".col-lg-4:hidden").length = 0) {
               $(".btn3").fadeOut('slow') 
             }
        });
         // Add Class
    $(".add-class").click(function(){
        $(".class-here").addClass("active");
    });
    $(".add-class2").click(function(){
        $(".class-here").toggleClass("active");
    });
    
    	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});