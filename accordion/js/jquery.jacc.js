//
(function($){
       
            $.fn.jacc= function(options){
                
                options = $.extend({
                    header: 'h3',
                    content: 'div',
                    duration: 400,
                    easing:'swing',
                    show:0,
                    multi: false
                }, options);
                
                return this.each(function(){
                    
                    var that = $(this),
                    heads = that.children(options.header),
                    content = that.children(options.content)
                ;
                        if(options.show === false){
                                    content.hide();
                        }
                        else if(options.show !== true){
                                    content.not(':eq('+ options.show +')').hide();
                        }
                    heads.bind('click', function(){
                        var block= $(this).next(options.content);
                                    if(!block.is(':animated')){
                                               
                                    if(options.multi===true){
                                                 block.slideToggle(options.duration, options.easing);
                                    }
                                    else{
                                      block
                                      .slideDown(options.duration, options.easing)
                                      .siblings(options.content)
                                      .slideUp(options.duration, options.easing)
                                      ;
                                    };
                                    
                        };
                            return false; 
                    });
                
                });    
            };
            
})(jQuery);