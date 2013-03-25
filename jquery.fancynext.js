//Andrew Clavin, Nov 25, 2012 www.andrewclavin.com
//To be used freely anyway seen fit

(function($) {

  $.fn.fancyNext = function() {

    if ($(this).next().length == 0) {
        return $(this).parent().children(':first');
      } else {
        return $(this).next();
      };    
  };
  
})(jQuery);
