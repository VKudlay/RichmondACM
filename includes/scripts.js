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
						      	<li><a href = "`+dir+`index.html">Home</a></li>
								<li><a href = "`+dir+`pages/about/index.html">About</a></li>
								<li class="dropdown">
									<a href = "`+dir+`pages/resources/index.html">
						      			Resources
						      			<span class="caret"></span>
						      		</a>
									<ul class="dropdown-menu">
										<li><a href = "`+dir+`pages/resources/paths/index.html">career paths in CS</a></li>
										<li><a href = "`+dir+`pages/resources/advice/index.html">resume/career advice</a></li>
										<li><a href = "`+dir+`pages/resources/resumes/index.html">student resumes</a></li>
										<li><a href = "`+dir+`pages/resources/interview/index.html">interview prep</a></li>
										<li><a href = "`+dir+`pages/resources/orgs/index.html">on-campus orgs</a></li>
									</ul>
								</li>
								<li class="dropdown">
									<a href = "`+dir+`pages/projects/current/index.html">
						      			Projects<span class="caret"></span>
						      		</a>
									<ul class="dropdown-menu">
										<li><a href = "`+dir+`pages/projects/current/index.html">current projects</a></li>
										<li><a href = "`+dir+`pages/projects/past/index.html">past projects</a></li>
									</ul>
								</li>
								<li><a href = "`+dir+`pages/volunteer/index.html">Volunteer</a></li>
								<li><a href = "`+dir+`pages/join/index.html">Join</a></li>
								<li><a href = "`+dir+`pages/contact/index.html">Contact</a></li>
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
			<img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1024px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png">
		</div>
		<div id="footmenu">
			<a href="#">Home</a>
			<a href="#">Sitemap</a>
			<a href="#">Contact Us</a>
		</div>
		<div id="Copyright">© 2017</div>
	`);
}
