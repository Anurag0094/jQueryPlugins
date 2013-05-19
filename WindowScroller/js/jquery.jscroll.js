(function($){
    
    $.jscroll= function(options){
        
        options = $.extend({
            to:0,
            easing: 'swing',
            duration: 1000
            
        },options);
        
        var start= $(window).scrollTop();
        
        if(typeof options.to === 'string'){
            options.to = $(options.to).offset().top;
        };
        
        var max= $(document).height() - $(window).height();
        if(options.to > max){
            options.to = max;
        };
        
        var change = options.to - start;
        var t=0;
        var anim = setInterval(function(){
            t +=15;
         
            var y= $.easing[options.easing](0, t, start, change, options.duration);
            window.scrollTo(0,y);
            
            if(t > options.duration){
                clearInterval(anim);
            }
        },15);
    };
})(jQuery);