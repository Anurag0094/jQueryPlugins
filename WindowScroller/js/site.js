//
$(function(){
   
   //What fires the scroll event
   $('a').bind('click', function(){
       
      //  $(window).scrollTop(1500);
    
        $.jscroll({
            //where to scroll to
            to: 'p:eq(6)',
            easing: 'easeOutBack'
            
        });
    });  
});