<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Register</title>
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

<body>
	<div class="cover">
		<div class="register">
			<div class="register__content">
				<h3>Register</h3>
				<div class="register__form">
				<!--  action="Register" autocomplete="on" method="Post" -->
					<form id="formLogin" onkeydown="return event.key != 'Enter';">
						<input type="text" placeholder="User name" name="username"
							id="user"> <span class="sp-thongbao" id="tb-user"></span>
						<input type="text" placeholder="E-mail" id="email" name="email">
						<span class="sp-thongbao" id="tb-email"></span> <input
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
	 <div class="modal" id="editModal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-center" role="document">
    <div class="modal-content">
      <div class="modal-header">
          <h3 class="modal-title" style="background: white; text-align: center ;color: black">Active Account</h3>
          <button type="button" class="close" style="left: 93%; top: 0" data-dismiss="modal">&times;</button>
        </div>
      <div class="modal-body">
        <h4>Welcome to Content Management System (CMS).Please click the button below to confirm your email address and activate your account</h4>
      <button type="button" class="btn btn-success" data-dismiss="modal" style="margin-top: 10%;
    margin-left: 30%;" id="btnOK"autofocus="autofocus">Click here to Confirm Now</button>
      </div>
      <div class="modal-footer">
  		<h4>After you confirm your account,you will be redirected to the login page</h4>
        
      </div>
    </div>
  </div>
</div>

	
	<%
		String msg = (String) request.getAttribute("usedEmail");
		if (msg != null)

		{
	%>
	<script type="text/javascript">
		/*  window.open("Login.jsp", null,"height=200,width=400,status=yes,toolbar=no,menubar=no,location=no"); */
		 var thongbao = document.getElementById('tb-email');
		   
		        thongbao.innerHTML = "<%=msg%>";
		        thongbao.style.display = "block";
		/* alert("Login fail"); */
	</script>

	<%
		}
		String usedUsername = (String) request.getAttribute("usedUsername");
		if (usedUsername != null)

		{
	%>
	<script type="text/javascript">
		 var emailInput = document.getElementById('tb-user');
		   
		        emailInput.innerHTML = "<%=usedUsername%>";

		emailInput.style.display = "block";
	</script>
	<%
		}
	%>
</body>

<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
	integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
	crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
		integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
		crossorigin="anonymous"></script>
	<script src="../js/register.js"></script>
</html>