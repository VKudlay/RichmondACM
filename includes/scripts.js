// Used by header function specifically
$(document).ready(function(){
    //$("#header").load("includes/header.html");
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
				      	<li><a href = "index.html">Home</a></li>
						<li><a href = "pages/about/index.html">About</a></li>
						<li class="dropdown">
							<a href="pages/resources/index.html">
				      			Resources
				      			<span class="caret"></span>
				      		</a>
							<ul class="dropdown-menu">
								<li><a href="pages/resources/paths/index.html">resources paths in CS</a></li>
								<li><a href="pages/resources/advice/index.html">resume/resources advice</a></li>
								<li><a href="pages/resources/resumes/index.html">student resumes</a></li>
								<li><a href="pages/resources/interview/index.html">interview prep</a></li>
								<li><a href="pages/resources/orgs/index.html">on-campus orgs</a></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="pages/projects/index.html">
				      			Projects<span class="caret"></span>
				      		</a>
							<ul class="dropdown-menu">
								<li><a href="pages/projects/current/index.html">current projects</a></li>
								<li><a href="pages/projects/past/index.html">past projects</a></li>
							</ul>
						</li>
						<li><a href = "pages/volunteer/index.html">Volunteer</a></li>
						<li><a href = "pages/join/index.html">Join</a></li>
						<li><a href = "pages/contact/index.html">Contact</a></li>
				    </ul>
				 </div>
	  		</div>
		</div>
	</div>
</div>`);
});

//used only by about page; to be separated
