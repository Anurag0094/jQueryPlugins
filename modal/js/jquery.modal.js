$(document).ready(function(){

    $.fn.modal =function(options){
        
        options = $.extend({
            olay: 'div',
            modal: 'div'
            
        },options);
        
    
            var that = $(this);
            var olay = $(options.olay);
            var modal = $(options.modal);
            
            function openModal(){
            
                olay.add(modal).show().css({opacity : 0});
                olay.animate({opacity : 0.6});
                modal
                    .css({
                    top:$(window).height() /2 - modal.outerHeight() /2 + $(window).scrollTop(),
                    left:$(window).width() /2 - modal.outerWidth() /2 + $(window).scrollLeft()
                })
                .stop(true)
                .animate({opacity : 1});
            };
            
            function moveModal(){
                modal
                .stop(true)
                .animate({
                top:$(window).height() /2 - modal.outerHeight() /2 + $(window).scrollTop(),
                left:$(window).width() /2 - modal.outerWidth() /2 + $(window).scrollLeft()
                },1000)
            };
            
            function closeModal(){
                olay.add(modal).animate({opacity : 0}, function(){
                    modal.hide();
                    olay.hide();
                });
                return false;
            };
            
            //Open modal 
            $('.modalLink').bind('click', function(){
                openModal();
                return false;
            });
            
            //close modal
            olay.bind('click', closeModal);
            
            $('.closeBtn').bind('click', closeModal);
            
            $(window).bind('keyup', function(e){
                if(e.which === 27){
                    closeModal();
                }
            });
            
            //resize modal
            $(window).bind('resize', moveModal)
    }
});
