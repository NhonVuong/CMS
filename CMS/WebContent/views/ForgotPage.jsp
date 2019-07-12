<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link
	href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;subset=vietnamese"
	rel="stylesheet" />
	<script src="https://code.jquery.com/jquery-3.4.1.min.js"
	integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	crossorigin="anonymous"></script>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous" />
<link rel="stylesheet" href="../css/fStyle.css">
</head>
<%if(session.getAttribute("keyF")==null)
	{
		response.sendRedirect("../Login.jsp");
	}
	
%>
<body>
	<div class="cover">
		<div class="register">
			<div class="register__content">
				<h3>New Password</h3>
				<div class="register__form">
				
					<form id="formLogin" onkeydown="return event.key != 'Enter';">
						 <input
							type="password" placeholder="Password" id="pass" name="pass">
						<span class="sp-thongbao" id="tb-pass"></span> <input
							type="password" placeholder="Re Password" id="repass"> <span
							class="sp-thongbao" id="tb-repass"></span>
						<input class="btnSubmit btn btn-success" id="btnSubmit" value="Register" type="button"/>
						 <span class="sp-thongbao" id="tb-submit"></span> <a
							href="../Login.jsp">Click here to Login</a>
					</form>
				</div>
			</div>
		</div>

	</div>
</body>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
	integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
	crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
		integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
		crossorigin="anonymous"></script>
	<script src="../js/forgot.js"></script>
</html>