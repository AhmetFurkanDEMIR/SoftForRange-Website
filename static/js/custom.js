(function($) {
	
    "use strict";
		
	$(window).on("load", function() {
		
		// PRELOADER
		var d = new Date();
		var n = d.getTime();;
		(function($, window, document, undefined) {
			var s = document.body || document.documentElement,
				s = s.style,
				prefixTransition = "";

			if (s.WebkitTransition === "") prefixTransition = "-webkit-";
			if (s.MozTransition === "") prefixTransition = "-moz-";
			if (s.OTransition === "") prefixTransition = "-o-";

			$.fn.extend({
				onCSSTransitionEnd: function(callback) {
					var $this = $(this).eq(0);
					$this.one("webkitTransitionEnd mozTransitionEnd oTransitionEnd otransitionend transitionend", callback);
					if ((prefixTransition == "" && !("transition" in s)) || $this.css(prefixTransition + "transition-duration") == "0s") {
						callback();
					} else {
						var arr_1 = $this.css(prefixTransition + "transition-duration").split(", ");
						var arr_2 = $this.css(prefixTransition + "transition-delay").split(", ");
						length = 0;
						for (var i = 0; i < arr_1.length; i++) {
							length = parseFloat(arr_1[i]) + parseFloat(arr_2[i]) > length ? parseFloat(arr_1[i]) + parseFloat(arr_2[i]) : length;
						};
						var d = new Date();
						var l = d.getTime();
						if ((l - n) > length * 1000) {
							callback();
						}
					}
					return this;
				}
			});
		})(jQuery, window, document);
		$("#preloader").addClass("loading");
		$("#preloader #loader").onCSSTransitionEnd(function() {
			$("#preloader").addClass("ended");
		});
		
		//FILTERABLE PORTFOLIO
		$(".simplefilter li").on("click", function() {
			$(".simplefilter li").removeClass("active");
			$(this).addClass("active");
		});
		var options = {
			animationDuration: 0.6,
			filter: "all",
			callbacks: {
				onFilteringStart: function() {},
				onFilteringEnd: function() {}
			},
			delay: 0,
			delayMode: "alternate",
			easing: "ease-out",
			layout: "sameSize",
			selector: ".filtr-container",
			setupControls: true
		}
		var filterizd = $(".filtr-container").filterizr(options);
		filterizd.filterizr("setOptions", options);

	});	
			
	$(document).ready(function () {
		
		// ADD CLASS TO ABOUT SECTION
		var aboutblock = $("#about");
		if (( /^((?!chrome|android).)*safari/i.test(navigator.userAgent))  && (aboutblock.length) ) {
			$("#about").addClass("safari");
		}
			
		// REMOVE # FROM URL
		$("a[href='#']").on("click", (function(e) {
			e.preventDefault();
		}));
		
		// LOGOS SLIDER
		$("#bxslider").bxSlider({
			minSlides: 1,
			maxSlides: 6,
			slideWidth: 200,
			slideMargin: 30,
			ticker: true,
			speed: 30000
		});	

		// INITIALIZING MAGNIFIC POPUP
		jQuery(".magnific-popup-gallery").parent().each(function() {
			magnific_popup_init(jQuery(this))
		});
			
		jQuery(".mfp-youtube").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 0,
			preloader: false,
			fixedContentPos: false,
			iframe: {
				patterns: {
					youtube: {
						src: "https://youtube.com/embed/%id%?autoplay=1&rel=0"
					},
				}
			}
		});
		jQuery(".mfp-vimeo").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 0,
			preloader: false,
			fixedContentPos: false,
			iframe: {
				patterns: {
					vimeo: {
						src: "https://player.vimeo.com/video/%id%?autoplay=1"
					}
				}
			}
		});
		function magnific_popup_init(item) {
			item.magnificPopup({
				delegate: "a[data-gal^='magnific-pop-up']",
				type: "image",
				removalDelay: 500,
				mainClass: "mfp-zoom-in",
				fixedContentPos: false,
				callbacks: {
					beforeOpen: function() {
						// just a hack that adds mfp-anim class to markup 
						this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim");
					}
				},
				gallery: {
					enabled: true
				}
			});
		}
		
		// BACK TO TOP
		$("#back-top a").on("click", function() {
			$("body,html").stop(false, false).animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		// TESTIMONIAL CAROUSEL
		$("#quote-carousel").carousel({
			wrap: true,
			interval: 6000
		});
		
		// TESTIMONIAL CAROUSEL TOUCH OPTIMIZED
		var cr = $("#quote-carousel");
		cr.on("touchstart", function(event){
			var xClick = event.originalEvent.touches[0].pageX;
			$(this).one("touchmove", function(event){
				var xMove = event.originalEvent.touches[0].pageX;
				if( Math.floor(xClick - xMove) > 5 ){
					cr.carousel('next');
				}
				else if( Math.floor(xClick - xMove) < -5 ){
					cr.carousel('prev');
				}
			});
			cr.on("touchend", function(){
					$(this).off("touchmove");
			});
		});

		// BUTTON ICON ANIMATION
		var btn_hover = "";
		$(".custom-button").each(function() {
			var btn_text = $(this).text();
			$(this).addClass(btn_hover).empty().append("<span data-hover='" + btn_text + "'>" + btn_text + "</span>");
		});

		// SINGLE PAGE SCROLL
		$("#singlepage-nav").singlePageNav({
			offset: 0,
			filter: ":not(.nav-external)",
			updateHash: 0,
			currentClass: "current",
			easing: "swing",
			speed: 750
		});
		
		// LOCAL SCROLL
		$(".scroll-to-target[href^='#']").on("click", function(scroll_to_target) {
			scroll_to_target.preventDefault();
			var a = this.hash,
				i = $(a);
			$("html, body").stop().animate({
				scrollTop: i.offset().top
			}, 900, "swing", function() {})
		})
		
		// HAMBURGER ICON ANIMATION
		$(".link-menu").on("click", function(){
			$("#icon-toggler").removeClass("open");
		});
		$("#icon-toggler").on("click", function(){
			$(this).toggleClass("open");
		});
		
		// AJAX CONTACT FORM
        $(".formcontact").on("submit", function() {
            $(".output_message").text("Loading...");

            var form = $(this);
            $.ajax({
                url: form.attr("action"),
                method: form.attr("method"),
                data: form.serialize(),
                success: function(result) {
                    if (result == "success") {
						$(".formcontact").find(".output_message_holder").addClass("d-block");
						$(".formcontact").find(".output_message").addClass("success");
                        $(".output_message").text("Message Sent!");
                    } else {
                        $(".formcontact").find(".output_message_holder").addClass("d-block");
						$(".formcontact").find(".output_message").addClass("error");
                        $(".output_message").text("Error Sending email!");
                    }
                }
            });

            return false;
        });
		
	});
	
	$(window).on("scroll", function() {
		
		// FIX HEADER ON SCROLL
		var e = $(window).scrollTop();
		$(window).height();
		e > 1 ? $(".header").addClass("header-fixed") : $(".header").removeClass("header-fixed");
		
		// BACK TO TOP
		if ($(this).scrollTop() > 100) {
			$("#back-top").fadeIn();
		} else {
			$("#back-top").fadeOut();
		}
		
	});
	
})(jQuery);