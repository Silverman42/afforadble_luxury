$("#loader").addClass("welcome-screen");
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    jQuery.fn.extend({
        navbarAnimate: function(offset, cssClass) {
            return this.each(function() {
                if ($(window).scrollTop() >= offset) {
                    $(this.children[0].children[0].children[1].children[0]).hide();
                    $(this.children[0].children[0].children[1].children[1]).show();
                } else {
                    $(this.children[0].children[0].children[1].children[0]).show();
                    $(this.children[0].children[0].children[1].children[1]).hide();
                }
            })
        },
        scrollAnimate: function(event, timing, animateArea, selectorHash) {
            if (selectorHash !== "") {
                event.preventDefault();
                //hash content of the selected element
                var hash = selectorHash;
                //animating the scroll to move to the location of the hash
                $(animateArea).animate({
                    scrollTop: $(hash).offset().top
                }, timing, function() {
                    //Adding hash (#) to url after scrolling is done
                    window.location.hash = hash;
                })
            }
        },
        cssAnimate: function(inAnimate) {
            return this.each(function() {
                if ($(window).scrollTop() >= $(this).offset().top - 500) {
                    $(this).addClass(inAnimate);
                }
            });
        },
        cssAnimate2: function(trigger, offset, animateClass, retainAnimate) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            if (trigger == offset && retainAnimate == 'false') {
                this.addClass('animated ' + animateClass)
                    .one(animationEnd, function() {
                        $(this).removeClass('animated ' + animateClass);
                    })
                return this;
            } else if (trigger == offset && retainAnimate == 'true') {
                this.velocity(animateClass, {
                    loop: 2
                });
                return this;
            }
        }
    });
    $(".service-hide").cssAnimate('service-show'); //Executing Animation before scroll event is executed 
    $(".testimony-hide").cssAnimate('service-show'); //Executing Animation before scroll event is executed
    $(".testimony-hide-inverse").cssAnimate('service-show'); //Executing Animation before scroll event is executed
    if ($(window).scrollTop() > 10) {
        //$('.logo').addClass('logo-reduce');
        $('.navbar-inverse').removeClass('navbar-inverse-2');
    }

    $(window).scroll(function() {
        $(".service-hide").cssAnimate('service-show')
        $(".testimony-hide").cssAnimate('service-show');
        $(".testimony-hide-inverse").cssAnimate('service-show');
        if ($(window).scrollTop() > 10) {
            //$('.logo').addClass('logo-reduce');
            $('.logo-caption>p').removeClass('f-black').addClass('f-gold');
            $('.navbar-inverse').removeClass('navbar-inverse-2');
        } else if ($(window).scrollTop() < 30) {
            //$('.logo').removeClass('logo-reduce');
            $('.logo-caption>p').removeClass('f-gold').addClass('f-black');
            $('.navbar-inverse').addClass('navbar-inverse-2')
        }

    })
    var timing = 800;
    var animateArea = "html, body";
    var selectorHash;
    $(".mapServices").click(function(event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);
    });
    $(".mapHome").click(function(event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);
    });
    $(".mapContact").click(function(event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);
    });
    $(".mapAbout").click(function(event) {
        selectorHash = this.hash;
        $(this).scrollAnimate(event, timing, animateArea, selectorHash);
    });
    //to get current year 
    var year = new Date()
    $("#year").text(year.getFullYear());
    /*
    / @description: Image Slider
    */
    var slider = (function() {
        var obj, count = 0,
            state = 0,
            animate;
        return {
            captionSelector: "",
            imgSelector: "",
            engine: function() {
                if (state === 0) {
                    $(obj.captionSelector).each(function(index, element) {
                        // body...
                        $(obj.imgSelector).eq(index).removeClass('translateStale');
                        $(obj.captionSelector).eq(index).removeClass('translateStale-ur');
                    });
                    $(obj.imgSelector).eq(count).addClass('translateStale');
                    $(obj.captionSelector).eq(count).addClass('translateStale-ur');
                    state = 1;
                } else if (state === 1 && count < $(obj.captionSelector).length - 1) {
                    $(obj.imgSelector).eq(count).removeClass('translateStale');
                    $(obj.captionSelector).eq(count).removeClass('translateStale-ur')
                    count++
                    $(obj.imgSelector).eq(count).addClass('translateStale');
                    $(obj.captionSelector).eq(count).addClass('translateStale-ur')
                } else if (count === $(obj.captionSelector).length - 1) {
                    $(obj.imgSelector).eq(count).removeClass('translateStale');
                    $(obj.captionSelector).eq(count).removeClass('translateStale-ur')
                    count = 0
                    $(obj.imgSelector).eq(count).addClass('translateStale');
                    $(obj.captionSelector).eq(count).addClass('translateStale-ur')
                }
                console.log();

            },
            interval: function() {
                obj = this;
                animate = setInterval(function() {
                    obj.engine();
                }, 4000);
                $(window).focus(function(e) {
                    e.preventDefault();
                    // body...
                    animate = setInterval(function() {
                        obj.engine();
                    }, 4000);
                })
                $(window).blur(function(e) {
                    e.preventDefault();
                    clearInterval(animate);
                })

            }
        }
    })();
    slider.captionSelector = '.slide-caption';
    slider.imgSelector = '.slide-img';
    slider.interval();
});
$(window).load(function() {
    $('.welcome-screen').addClass('remove-loader');
})