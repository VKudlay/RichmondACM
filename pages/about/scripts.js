//used only by about page; to be separated
$(document).ready(function(){
	$(".about-text").slideUp(1);

    $("#about-menu li").click(function(){
    	var curr_li = $(this).index()
			$(".about-text").slideUp(100).delay(0);
    	$(".about-text").eq(curr_li).slideDown(500);
    	$("#about-menu li").attr("id", "");
    	$(this).attr("id", "active");

    	$("#main-container img").css("filter", "invert(" + curr_li*0.4 +")");

    });
		$("#about-menu.introset").click(function(){
			$(this).attr("class", "");
		});
});
