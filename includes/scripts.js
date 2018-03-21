$(document).ready(function(){
	var dir = getLevel();
    setHeader(dir);
    setFooter(dir);
});

function getLevel(){
	switch($('meta[name=level]').attr("content")){
		case "1": return "";
		case "2": return "../../";
		case "3": return "../../../";
	}
	alert($('meta[name=level]').attr("content"));
}

function setHeader(dir) {
    $("header").html(`
		<div class="navbar navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header">
					<h1>Richmond<span>ACM</span></h1>
					<div id="toggle-menu-container">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			    			<span class="icon-bar"></span>
			    			<span class="icon-bar"></span>
			    			<span class="icon-bar"></span>
			  			</button>

					  	<div class="collapse navbar-collapse" id="myNavbar" aria-expanded="false" style="height: 0px;">
							<ul class="nav navbar-nav">
								<li><a href = "`+dir+`index.html">Home</a><li>
								<li><a href = "`+dir+`pages/about/index.html">About</a></li>
								<li class="dropdown">
									<a href = "#">
						      			Career Resources
						      			<span class="caret"></span>
						      		</a>
									<ul class="dropdown-menu">
										<li><a href = "`+dir+`pages/resources/paths/index.html">Career Paths in CS</a></li>
										<li><a href = "`+dir+`pages/resources/advice/index.html">Resume/Career Advice</a></li>
										<li><a href = "`+dir+`pages/resources/resumes/index.html">Student Resumes</a></li>
										<li><a href = "`+dir+`pages/resources/interview/index.html">Interview Prep</a></li>
									</ul>
								</li>
								<li class="dropdown">
									<a href = "#">
						      			Activities<span class="caret"></span>
						      		</a>
									<ul class="dropdown-menu">
										<li><a href = "`+dir+`pages/activities/hackathon/index.html">SpiderHacks</a></li>
										<li><a href = "`+dir+`pages/activities/current/index.html">Current Project Areas</a></li>
										<li><a href = "`+dir+`pages/activities/past/index.html">Past Projects</a></li>
										<li><a href = "`+dir+`pages/activities/volunteer/index.html">Volunteer</a></li>
									</ul>
								</li>
								<li><a href = "https://tinyurl.com/joinACMur2017" target="_blank">Join ACM</a></li>
						    </ul>
						 </div>
			  		</div>
				</div>
			</div>
		</div>

	`);
}

function setFooter(dir) {
    $("footer").html(`
		<div id="acmholder">
			<img src="`+dir+`includes/UR-ACM-Logo.png">
		</div>
		<div id="footmenu">
			<a href="`+dir+`index.html">Home</a>
			// <a href="#">Sitemap</a>
			<a href="mailto:acm.urichmond@gmail.com">Contact Us</a>
		</div>
		<span id="Copyright">© ACM UR 2017 - 18</span>
	`);
}
