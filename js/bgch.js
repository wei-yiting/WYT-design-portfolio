//JavaScriptDocument

$(document).ready(function(){

    $('.projName ul li').hover(function(){
        
        $('#picture').removeClass().addClass(
            $(this).attr('rel'));
        $(this).addClass('active').siblings().removeClass('active');
                
        $('footer').addClass('ch_col');
        $('nav ul li a').addClass('ch_col');
        $('#name').addClass('ch_col');
    });
	
});