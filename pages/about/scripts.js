//used only by about page; to be separated
$(document).ready(function(){
	$(".about-text:not(:first)").slideUp(1);

    $("#about-menu li").click(function(){
    	var curr_li = $(this).index()
    	$(".about-text").slideUp(500).delay(200);
    	$(".about-text").eq(curr_li).slideDown(500);
    	$("#about-menu li").attr("id", "");
    	$(this).attr("id", "active");

    	$("#main-container img").css("filter", "invert(" + curr_li*0.4 +")");

    });
});
