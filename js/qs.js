/* Author: Sylvester 'Silverman42' Nkeze
// Project: QuickSLide
// Version: v1
// Github: https://github.com/Silverman42/QuickSlides
*/
(function($){
    $.fn.quickSlide = function(param){
        //Optional parameters for QS to change it's settings
        var options = $.extend({
            slideType : 'simple'
        },param)
        return this.each(function(index){
            var qsContainer = $(this); //container Object
            var qsSlides = this.children[0].children; //subContainer Object
            var slideLength = qsSlides.length; //Number of slides
            var torretLeft = this.children[1]; //Left button Object
            var torretRight = this.children[2]; //right button object
            var torretBottom = this.children[3]; //bottom button object
            var counter = 0;
            //console.log(torretBottom); //debug: to check if objects are passed properly
            if (options.slideType === "simple") {
                //Function to control slide animation
                var slideHide = function () {  
                    $(qsSlides).each(function (index, element) {
                        // element == this
                        $(element).css({"display":"none"}); //no display in all slides
                    });
                    $(qsSlides).eq(counter)
                    .fadeIn(800)
                    .css({"display":'block'});
                }
                slideHide();
                $(torretLeft).click(function (e) {// Action after clicking left button
                    e.preventDefault();
                    if(counter > 0){
                        counter--;
                        slideHide();
                    }
                    else if(counter === 0){
                        counter = slideLength - 1;
                        slideHide();
                    } 
                });
                $(torretRight).click(function (e) {// Action after clicking left button
                    e.preventDefault();
                    if(counter < slideLength && counter !== slideLength - 1){
                        counter++;
                        slideHide();
                    }
                    else if(counter === slideLength - 1){
                        counter = 0;
                        slideHide();
                    }
                });


                //slideHide(); //debug: to check if slides has display 
            }
        })
    }
}(jQuery))
$('.qs-container').quickSlide();