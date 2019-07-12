<%@page import="model.Base64Hash"%>
<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Login</title>
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
<link rel="stylesheet" href="css/fStyle.css">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<html>

<head>

</head>

<body>
	<div class="cover">
		<div class="register">
			<div class="register__content">
				<h3>Please Sign In</h3>
				<div class="register__form">
				<!--  action="Login"  method="Post"-->
					<form  id="formLogin" onkeydown="return event.key != 'Enter';">
						<input type="text" placeholder="E-mail" name="email" id="email">
						<span class="sp-thongbao" id="tb-email"></span><br> <input
							type="password" placeholder="Password" name="pass" id="pass">
						<span class="sp-thongbao" id="tb-pass"></span><br> <input
							type="checkbox" id="checkbox" style="width: 20px;"
							value="remember" ><span>Remember Me</span>

						<input class="btnSubmit btn btn-success" id="btnSubmit" value="Login" type="button"/>
						<span class="sp-thongbao" id="tb-submit"></span><br> <a
							href="views/Register.jsp"class="ct">Click here to Register</a>
							<a href="views/Register.jsp"class="ct forgot"data-toggle="modal" data-target="#forgetModal">Forgot Password</a>
					</form>
				</div>
			</div>
		</div>
	</div>

<div class="modal" tabindex="-1" role="dialog" id="forgetModal"
	style="margin-top: 10%;">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				 <h3 class="modal-title">Forgot Password</h3>
	          	<button type="button" class="close" style="left: 93%; top:0" data-dismiss="modal">&times;</button>
				<!-- <h3 class="modal-title" style="background-color: white;">Do You
					Want To Delete?</h3>
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close" >
					<span aria-hidden="true">&times;</span>
				</button> -->
				<span class="id-delete" style="display: none;" id="id-delete"></span>
			</div>
			 <div class="modal-body">
		          <h4>Please enter your email to proceed to change the password</h4>
		          
				<input type="text" name="emailFG" id="emailFG" placeholder="E-mail"
					class="input emailFG" /> <span class="sp-thongbao" id="tb-emailFG"
					></span>
		     </div>
			<div class="modal-footer">
				<button type="button" class="btn btn-success reset"
					 data-button="reset" id="reset"
					style="width: 100%;padding: 9px;font-size: 19px;">Reset</button>
				
			</div>
		</div>
	</div>
</div>
 <div class="modal" id="editModal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-center" role="document">
    <div class="modal-content">
      <div class="modal-header">
          <h3 class="modal-title">Please Check Email</h3>
          <button type="button" class="close" style="left: 93%; top: 0" data-dismiss="modal">&times;</button>
        </div>
      <div class="modal-body">
        <h3>An Email has been send to you!</h3>
      </div>
      <div class="modal-footer">
  
        <button type="button" class="btn btn-success" data-dismiss="modal" id="btnOK"autofocus="autofocus">OK</button>
      </div>
    </div>
  </div>
</div>

	<script src="js/login.js"></script>
	<%
	
		
		String passCookies="";
		String emailCookies="";
		 Cookie[] cookies = request.getCookies();
	        //iterate each cookie
	        if(cookies!=null)
	        {
	        	for (Cookie cookie : cookies) {
		            //display only the cookie with the name 'website'
		            if (cookie.getName().equals("p")) {
		               passCookies= cookie.getValue();
		            }
		            else if (cookie.getName().equals("u")) {
			               emailCookies= cookie.getValue();
			            }
		        }
	        }
	        
		if (emailCookies != "") {
	%>
	<script type="text/javascript">
		 var emailInput = document.getElementById('email');
		   
		        emailInput.value = "<%=emailCookies%>";
		
		/* emailInput.style.display = "block"; */
	</script>
	<%
		}
		if ( passCookies!="") {
			Base64Hash b64 = new Base64Hash();
			String passEncoded =b64.decodeBase64(passCookies);
	%>
	<script type="text/javascript">
		 var passInput = document.getElementById('pass');
		 passInput.value = "<%=passEncoded%>";
		 var checkRemember = document.getElementById('checkbox');
		 checkRemember.checked = true;
	</script>
	<%
		}
		else
		{
	%>
	<script type="text/javascript">
		 var checkRemember = document.getElementById('checkbox');
		 checkRemember.checked = false;
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
</html>