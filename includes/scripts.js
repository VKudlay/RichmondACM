// Used by header function specifically
$(document).ready(function(){
	//Mobile optimization

	//(Mobile) shows and hides side navbar
	$('.navbar-toggle').click(function() {
		$(".nav").addClass("active");
		$("#cover").show();
	});	$('#cover').click(function() {
		$(".nav").removeClass("active");
		$("#cover").hide();
	});

	//Selected menu button toggle + menu toggle
	$(".nav li").click(function() {
		$("iframe").attr("src", 
			"pages/"+$(this).attr('id')+"/index.html");

		$(".nav li").not($(this)).removeClass("selected");
		$(this).addClass("selected");
	});
});