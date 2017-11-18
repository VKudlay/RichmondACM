$(document).ready(function(){
// Used by header function specifically
    //$("#header").load("../../includes/sub-child-header.html");
    $("#header").html(`<div class="navbar navbar-inverse">
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
				      	<li><a href = "../../index.html">Home</a></li>
						<li><a href = "../about/index.html">About</a></li>
						<li class="dropdown">
							<a href="../resources/index.html">
				      			Resources
				      			<span class="caret"></span>
				      		</a>
							<ul class="dropdown-menu">
								<li><a href="../resources/paths/index.html">resources paths in CS</a></li>
								<li><a href="../resources/advice/index.html">resume/resources advice</a></li>
								<li><a href="../resources/resumes/index.html">student resumes</a></li>
								<li><a href="../resources/interview/index.html">interview prep</a></li>
								<li><a href="../resources/orgs/index.html">on-campus orgs</a></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="../projects/index.html">
				      			Projects<span class="caret"></span>
				      		</a>
							<ul class="dropdown-menu">
								<li><a href="../projects/current/index.html">current projects</a></li>
								<li><a href="../projects/past/index.html">past projects</a></li>
							</ul>
						</li>
						<li><a href = "../volunteer/index.html">Volunteer</a></li>
						<li><a href = "../join/index.html">Join</a></li>
						<li><a href = "../contact/index.html">Contact</a></li>
				    </ul>
				 </div>
	  		</div>
		</div>
	</div>
</div>`);
        $("footer").html(`
    	<footer>
			<img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1024px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png">
			<a href="#">Home</a>
			<a href="#">Sitemap</a>
			<a href="#">Contact Us</a>
			<div id="Copyright">© 2017</div>
		</footer>`);
});