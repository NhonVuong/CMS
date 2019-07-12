<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
<title>CMS</title>
<!-- Required meta tags -->
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous" />
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<!-- <link
	href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
	type="text/css" rel="stylesheet" /> -->
<link rel="stylesheet" href="../css/fStyle.css" />
</head>
<body>
<%-- <%if(session.getAttribute("login")==null)
	{
		response.sendRedirect("../Login.jsp");
	}
	
%> --%>
	<div class="header">
		<h4>CMS</h4>
		<div class="header__user" id="header__user" tabindex="1">
			<div class="header__user-icon">
				<i class="fa fa-user"></i> <i class="fa fa-caret-down"></i>
			</div>
			<div class="header__user-detail" id="header__user-detail" >
				<div class="user-profile" id="user-profile" tabindex="2">

					<i class="fa fa-user"></i> <span >User Profile</span>

				</div>
				<hr />
				<a href="Logout" style="margin:0" id="aLogout">
					<div class="logout" id="logout" tabindex="3">
						
						<i class="fa fa-sign-out"></i><span >Logout</span>
										
	
					</div>
				</a>	
			</div>
		</div>
	</div>
	<div class="content">
		<ul class="content__left ">
			<li class="view" id="view" tabindex="4">
				<i class="fa fa-table"></i> <span>View contents</span>
			</li>
			<li class="note" id="note" tabindex="5">
				<i class="fa fa-edit"></i> <span>Form content</span>
			</li>
		</ul>
		<div class="content__right" id="contentRight">
			<div id="loading" >
				<h1>Loading...</h1>
			</div>
		    <div id="content">
		    </div>
			
		

		</div>
	</div>
	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"
		integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
		integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
		crossorigin="anonymous"></script>
		<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> -->
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
		integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
		crossorigin="anonymous"></script>
	<script src="../js/main.js"></script>
</body>
</html>
