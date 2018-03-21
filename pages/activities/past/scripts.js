//used only by about page; to be separated

$(document).ready(function(){
    $(".dropbtn").click(function(){
    	$(".dropdown-content").toggle()

    });

	$("#project-container .projects").click(function(){
		if(!$(this).hasClass("active")){
			$("#project-container .projects").removeClass("active");
			$(this).addClass("active");
		} else {		
			$("#project-container .projects").removeClass("active");
		}
	});
});
