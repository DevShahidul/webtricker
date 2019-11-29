
;(function($){
	$(function(){
		// Begin input common focus and blur for value.
		$('.main-wrap input:text, .main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}});
		$('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}});
		// Ends input common focus and blur for value.
        
        // Nav expand function
        $(".navbar-toggler").click(function(){
            $("body").toggleClass("nav-shown");
        });
		
        if($("#projects-carousel").length){
            
            totalSlide('#projects-carousel .project-item');
            
            $("#projects-carousel").slick({

                // normal options...
                infinite: true,
                dots: false,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                speed: 800,
                prevArrow: $('.project-controller-wrap .prev'),
                nextArrow: $('.project-controller-wrap .next'),

                // the magic
                responsive: [{

                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    infinite: true
                  }

                }, {

                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                  }

                }, {

                    slidesToShow: 2,
                    //breakpoint: 300,
                    //settings: "unslick" // destroys slick

                }]
            });
            
            slideCounting("#projects-carousel");
        }
        
        if($("#team-carousel-wrap").length){
            
            totalSlide('#team-carousel-wrap .team-member');
            
            $("#team-carousel-wrap").slick({

                // normal options...
                infinite: true,
                dots: false,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
                asNavFor: "#team-member-description",
                speed: 800,
                prevArrow: $('.team-carousel-controller .prev'),
                nextArrow: $('.team-carousel-controller .next'),

                // the magic
                responsive: [ {

                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    dots: false
                  }

                }, {

                    slidesToShow: 2,
                    //breakpoint: 300,
                    //settings: "unslick" // destroys slick

                }]
            });
            
            
            $("#team-member-description").slick({

                // normal options...
                infinite: true,
                dots: false,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                asNavFor: "#team-carousel-wrap",
                adaptiveHeight: true,
                speed: 800,
                prevArrow: $('.team-carousel-controller .prev'),
                nextArrow: $('.team-carousel-controller .next'),
            });
            
            slideCounting("#team-carousel-wrap");   
        }
        
        if($("#clients-carousel").length){
            $("#clients-carousel").slick({
                infinite: true,
                dots: false,
                arrows: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 1200,
                responsive: [{

                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    infinite: true
                  }

                }, {

                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    dots: false
                  }

                }, {

                    slidesToShow: 2,
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }

                }]
            });
        }
        
        if($("#testimonial-carousel-wrap").length){
            $("#testimonial-carousel-wrap").slick({

                // normal options...
                infinite: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 500,

                // the magic
                responsive: [{

                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    infinite: true
                  }

                }, {

                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    dots: false
                  }

                }, {

                    slidesToShow: 2,
                    //breakpoint: 300,
                    //settings: "unslick" // destroys slick

                }]
            });
        }
        
        if($("#testimonial-carousel-figure").length){
            var galleryThumbs = new Swiper('#testimonial-carousel-figure', {
              spaceBetween: 10,
              slidesPerView: 1,
              loop: true,
              freeMode: false,
              speed: 800,
              noSwiping: true,
              loopedSlides: 5, //looped slides should be the same
              watchSlidesVisibility: true,
              watchSlidesProgress: true,
            });
            var galleryTop = new Swiper('#testimonial-carousel-content', {
              spaceBetween: 10,
              loop:true,
              effect: 'fade',
              loopedSlides: 5, //looped slides should be the same
              navigation: {
                nextEl: '#carousel-controller .next',
                prevEl: '#carousel-controller .prev',
              },
              thumbs: {
                swiper: galleryThumbs,
              },
            });
        }
        
        
        if($(".body-copy").length){
            wordWrap();   
            
            var delayTime = 0.7 
            $('.body-copy').each(function(){
                var $this = $(this);
                $this.find("span").each(function(i){
                    $(this).css({
                       'animation-delay'  : delayTime + (i * .2) + 's'
                    });  
                })
            });
            
        }
        
        if($(".body-copy").length){
            wordWrap();   
            
            var delayTime = 0.4 
            $('.body-copy').each(function(){
                var $this = $(this);
                $this.find("span").each(function(i){
                    $(this).css({
                       'animation-delay'  : delayTime + (i * .2) + 's'
                    });  
                });
            });
            
        }
        
        if($(".counter-item").length){ 
            
            var delayTime = 0.2 
                $(".counter-item").each(function(i){
                    $(this).css({
                       'transition-delay'  : delayTime + (i * .2) + 's'
                    });  
                });
            
        }
        
        if($(".hero-content").length){
            var delayTime = 0.9 
            $(".hero-content .body-copy span").each(function(i){
                $(this).css({
                   'animation-delay'  : delayTime + (i * .2) + 's'
                });  
            });
        }
        
        
        // This function for scroll from bottom animation
        if ($(".animate").length){
            var $animation_elements = $('.animate');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($animation_elements, function() {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if (element_top_position <= window_bottom_position) {
                        $element.addClass('in-view');
                    } else {
                        $element.removeClass('in-view');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        }  
        // End animation function
        
        // Animate bg function
        var secImg = $(".our-team-section .bg");
        var sectionTopPos = $(".our-team-section").offset().top;
        var sectionBottomPos = sectionTopPos + $(".our-team-section").outerHeight();
        var windowHeight = $(window).height();
        $(window).on("scroll", function(){
            var wScrollPos = $(window).scrollTop();
            if(wScrollPos > sectionTopPos - (windowHeight/2) ){
                TweenMax.to(secImg, 1, {
                    clipPath: "inset(0px 0px 0px 50%)",
                    webkitClipPath: "inset(0px 0px 0px 50%)"
                });
            }
           
        });
            
	});// End ready function.
        
    // Total slide count function
    function totalSlide(selector){
        var totalSlideNumber = 0;
        $(selector).each(function(i){
            totalSlideNumber =  i + 1;
            totalSlideNumber < 10 ? totalSlideNumber = '0' + totalSlideNumber : totalSlideNumber;
        });
        $('.carousel-counter .total' ).text(totalSlideNumber);
    }
    
    // Current Slide counter function
    function slideCounting(selector){
        $(selector).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var getNumber = nextSlide + 1;
            getNumber < 10 ? getNumber = '0' + getNumber : getNumber;
            $(this).parent().find('.carousel-counter .current' ).text(getNumber);
        });
    }
    	
    $(window).on("load", function(){
        $("body").addClass("loaded");
    });
        
    // Add span tag each line in a paragraph
    function wordWrap() {
        $(".body-copy").each(function(){
          var bdy = $(this);
          var body2 = bdy.parent().find(".body-copy-two");
          var text = $(bdy).text();
          var html = $(bdy).html();
          var bWidth = $(bdy).width();
          var words = text.split(" ");
          var span = "";
          var word = "";
          var allSpans = "";
          var lastWord = "";
          $(words).each(function(i, w) {
            if (lastWord != "") {
              w = lastWord + " "+ w ;
              lastWord = "";
            };
            word = w + " ";
            span = span + word;
            body2.append(word);
            if (body2.width() >= bWidth) {
              var wLen = word.length;
              span = span.slice(0, -wLen);
              lastWord = w + " ";
              allSpans = allSpans + "<span>" + $.trim(span) + "</span>";
              body2.html("");
              span = "";
              word = "";
            }
          });
          var lastSpan = "<span>" + body2.text() + "</span>";
          $(bdy).html(allSpans + lastSpan);
        })
    }

})(jQuery);