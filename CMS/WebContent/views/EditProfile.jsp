<%@page import="object.Member"%>
<%@page import="model.ModelMember"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<div class="edit" id="edit">
	<h1>Edit Profile</h1>
	<hr />
	<div class="detail" id="detai-edit">
		<div class="title">
			<p>Profile Form Elements</p>
		</div>
		<form action="" onkeydown="return event.key != 'Enter';">
			<%
				String email = (String) session.getAttribute("email");
				ModelMember model = new ModelMember();
				Member m = new Member();
				/* set cung */
				m = model.getUser(email);
			%>
			<p>First Name</p>
			<input type="text" id="firstName" placeholder="Enter the first name"
				class="input" value="<%=m.getFirstname()%>" /> <span
				class="sp-thongbao" id="tb-firstname"></span>
			<p>Last Name</p>
			<input type="text" id="lastName" placeholder="Enter the last name"
				class="input" value="<%=m.getLastname()%>" /> <span
				class="sp-thongbao" id="tb-lastname"></span>
			<p>Email</p>
			<input type="email" id="email" placeholder="your_email@exmaple.com"
				class="input email" readonly value="<%=m.getEmail()%>" /> <span
				class="sp-thongbao" id="tb-email"></span>
			<p>Phone</p>
			<input type="text" id="phone" placeholder="Enter your phone number"
				class="input" value="<%=m.getPhone()%>" /> <span
				class="sp-thongbao" id="tb-phone"></span>
				
			<p>Description</p>
			<textarea name="" id="description" cols="30" rows="10"><%=m.getDescription()%></textarea>
			<span class="sp-thongbao" id="descrip"></span>
			<a data-target="#changePasswordModal" data-toggle="modal" href="#changePasswordModal" id="aChangePass">Click here to change password</a>
			<div class="button-form">
				<input id="buttonEdit" type="button" value="Submit button"
					style="color: white;" name="" /> <input id="buttonReset"
					type="button" value="Reset button" style="color: white;" />
			</div>
			<span class="sp-thongbao" id="tb-btnEdit"></span> 			
		</form>
	</div>
</div>
<div class="modal" id="changePasswordModal" role="dialog" tabindex="-1">
	<div class="modal-dialog" role="document">
		<div class="modal-content modal-update">
			<div class="modal-header">
				<h3 class="modal-title">Change Password</h3>
				<button type="button" class="close" data-dismiss="modal" style="left: 93%; top: 0;">&times;</button>				
			</div>
			<form onkeydown="return event.key != 'Enter';">
				<div id="contentCurrentPassword">					
					<input 
					type="password" 
					name="current-password" 
					id="currentPassword"
					class="input title"
					placeholder="Current Password"
					>
				</div>
				<span class="sp-thongbao" id="tb-currentpass"></span>			
				<br>				
				<div id="contentNewPassword">					
					<input 
					type="password" 
					name="new-password" 
					id="newPassword"
					class="input title"
					placeholder="New Password"
					>
				</div>
				<span class="sp-thongbao" id="tb-newpass"></span><br>
				<div id="contentConfirmNewPassword">					
					<input 
					type="password" 
					name="confirm-new-password" 
					id="confirmNewPassword"
					class="input title"
					placeholder="Re New Password"
					>
				</div>
				<span class="sp-thongbao" id="tb-renewpass"></span><br>
				<div class="modal-footer" style="padding-right: 71%;">					
					<input
					type="button"
					class="btn btn-success update-password"
					id="btnUpdatePassword"
					value="Change Password"
					style="margin-top: 5px; width: auto;"
					>								
				</div>
				<span class="sp-thongbao" id="tb-submit"></span>
			</form>
		</div>
	</div>
</div>
<div class="modal" id="editModal" role="dialog" tabindex="-1">
	<div class="modal-dialog modal-center" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title">Edit Profile</h3>
				<button type="button" class="close" style="left: 93%; top: 0"
					data-dismiss="modal">&times;</button>
			</div>
			<div class="modal-body">
				<h3>Edit profile success!</h3>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-success" data-dismiss="modal"
					id="btnOK" autofocus="autofocus">OK</button>
			</div>
		</div>
	</div>
</div>
<script src="../js/editProfile.js"></script>