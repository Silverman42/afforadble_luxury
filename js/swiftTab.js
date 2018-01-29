$(document).ready(function () {
    (function($){
        $.fn.swiftTabs = function(param){
            //optional parameter to change class for personalization
            var option = $.extend({
                nav: '.st-navbar',
                tab: '.st-tabs',
                pages: '.st-pages',
            },param);
            return this.each(function(){
                var counter = 0; //Counter to get Index of tab class and page class after in tabSwitch function
                var counter2;// Counter to assign index of tabColor array;  
                var tabColor = [];// Array to set border color style for tabClass
                var tabClass = this.children[0].children; //Tab Class
                var pagesClass = this.children[1].children;//Pages Class                
                //tab switch function to change change tab and pages accordingly
                var tabSwitch = function () {
                 $(tabClass).each(function (index, element) {
                        // element == this
                        counter2 = index
                        tabColor[counter2] = $(this).attr('data-st-color');
                        $(this).removeClass("st-tabs-border");
                        $(pagesClass).eq(index).fadeOut();
                        $(pagesClass).eq(index).css({'display':'none'});
                    });
                   // console.log(tabColor[counter]);
                    $(tabClass).eq(counter).addClass("st-tabs-border");
                    $(pagesClass).eq(counter).fadeIn('slow');
                    $(pagesClass).eq(counter).css({'display':'block'});
                    
                }
                //tabSwitch function invoke
                tabSwitch();                
                $(tabClass).each(function (index, element) {
                    $(this).click(function (e) { 
                        e.preventDefault();
                        counter = index;
                        tabSwitch();
                    });
                   
                });
            })
        }
    }(jQuery));
$(".st-container").swiftTabs();
})