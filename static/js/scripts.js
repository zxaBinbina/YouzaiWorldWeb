/* Template: Aria - Business HTML Landing Page Template
   Author: Inovatik
   Created: Jul 2019
   Description: Custom JS file
*/


(function($) {
    "use strict";

    console.log(
		' _____ _____ _____ ____     _____     _                 _\n' +
        '|   __|     |  _  |    \\   |   | |___| |_ _ _ _ ___ ___| |_\n' +
        '|   __|  |  |     |  |  |  | | | | -_|  _| | | | . |  _| \'_|\n' +
        '|_____|__  _|__|__|____/   |_|___|___|_| |_____|___|_| |_,_|\n' +
        '         |__|\n' +
        '\n' +
        'EQAD_Web - By Leonsu_L & JessDaodao\n' +
        '网站基于模板二次创作，已在GitHub开源：https://github.com/Equestriarcadia/EQAD_Web\n'+
		'二改：zxabinbina 感谢JessDaodao提供支持。'
	);

	/* Preloader */
	window.addEventListener('load', function() {
 	 const loader = document.querySelector('.loader');
 	 const loadStartTime = Date.now();
	  const minimumLoadTime = 500;

 	 function hideLoader() {
 	   loader.classList.add('hidden');
 	   loader.addEventListener('transitionend', function() {
  	    loader.style.display = 'none';
 	   }, { once: true });
 	 }

 	 const elapsedTime = Date.now() - loadStartTime;
  
 	 if (elapsedTime >= minimumLoadTime) {
 	   hideLoader();
 	 } else {
 	   setTimeout(hideLoader, minimumLoadTime - elapsedTime);
 	 }
	});

	
	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });
    

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });

    
    /* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Filter - Isotope */
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    // filter items on button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });	
    });
    

    /* Counter - CountTo */
	var a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
			var oTop = $('#counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);
					//alert('finished');
					}
				});
			});
			a = 1;
			}
		}
    });

	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

	function initSlideshow() {
	    const slides = document.querySelectorAll('.header-slideshow .slide');
	    let currentSlide = 0;
	    const slideInterval = 3000;
    
	    function nextSlide() {
	        slides[currentSlide].classList.remove('active');
	        currentSlide = (currentSlide + 1) % slides.length;
	        slides[currentSlide].classList.add('active');
	    }
    
	    let slideTimer = setInterval(nextSlide, slideInterval);
    
	    const slideshow = document.querySelector('.header-slideshow');
	    slideshow.addEventListener('mouseenter', () => {
	        clearInterval(slideTimer);
	    });
    
	    slideshow.addEventListener('mouseleave', () => {
	        slideTimer = setInterval(nextSlide, slideInterval);
	    });
    
	    slides[0].classList.add('active');
	}

	document.addEventListener('DOMContentLoaded', function() {
	    initSlideshow();
	});

})(jQuery);
