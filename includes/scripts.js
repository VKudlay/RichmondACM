// Used by header function specifically
$(document).ready(function(){
	//Mobile optimization
	var curr;

	//(Mobile) shows and hides side navbar
	$('.navbar-toggle').click(function(){menu_in()});	
	$("#cover").click(function(){menu_out()});

	$(window).resize(function(){
		if($(window).width() < 635) menu_out();
	});


	function menu_in(){
		$(".nav").addClass("active");
		$("#cover").show();
	} function menu_out(){
		$(".nav").removeClass("active");
		$("#cover").hide();
		$("ul.sub-menu").removeAttr("style");
	}

	//Selected menu button toggle + menu toggle
	$(".nav li").click(function() {

		$("iframe").attr("src", 
			"pages/"+$(this).attr('id')+"/index.html");

		$(".nav li").not($(this)).removeClass("selected");
		if($(document).width() > 635)
			$(this).addClass("selected");

		if($(document).width() < 635 && $(this).hasClass("parent")){
			$("ul.sub-menu").removeAttr("style");
			$(this).find("ul.sub-menu").css("display", "grid");
			$(this).find("ul.sub-menu").css("width", "200px");
		} else {
			$("ul.sub-menu").removeAttr("style");
		}
	});
});