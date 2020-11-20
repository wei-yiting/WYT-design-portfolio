// JavaScript Document
$(document).ready(function(){

    $(".menu-btn").click(function(){
        
        $(".menu-btn").toggleClass("open");

        
        $("nav").slideToggle();
        $('#projList').slideToggle();
        
        $('footer').removeClass('ch_col');
        $('nav ul li a').removeClass('ch_col');
        $('#name').removeClass('ch_col');
    
    });
    
    
    var wh = $(window).width();
	
	$(window).on( 'load', 'resize' ,function(){
		if(wh >= 768){ 
			$("nav").show();
		}else{
			$("nav").hide();
		}
	});
});