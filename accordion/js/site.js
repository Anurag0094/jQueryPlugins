$(document).ready(function(){
		
		$('.accordion').jacc({
			header: 'h3',
			content: 'div',
			duration: 400,
                        easing:'swing',
                        show:0,
                        multi: false
		});	
	});