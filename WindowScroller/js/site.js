$(function(){
   
   $('a').bind('click', function(){
       
        $.jscroll({
            to: 'p:eq(6)',
            easing: 'easeOutBack'
            
        });
    });  
});