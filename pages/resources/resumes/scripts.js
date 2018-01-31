//used only by about page; to be separated

$(document).ready(function(){
    $(".resume-item").click(function(){
    	$("#popup-page").toggle();
      $("#popup-page #content-screen").replaceWith((this+" .resume-meta").html());
    });

    $("#back-screen").click(function(){
    	$("#popup-page").toggle();
    });


});
