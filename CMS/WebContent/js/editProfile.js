function getEle(element) {
	return document.getElementById(element);
}
var checkLG = false;

document.getElementById("buttonReset").onclick = function() {
	$('#content').load('EditProfile.jsp');
}
$("#buttonEdit")
		.click(
				function() {
					var firstName = getEle("firstName").value.trim();
					var lastName = getEle("lastName").value.trim();
					var email = getEle("email").value.trim();
					var phone = getEle("phone").value.trim();					
					description = getEle("description").value.trim();

					
					var phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
					
					checkT1 = KiemTraTrong('firstName', 'tb-firstname',
							'Firstname');
					if (checkT1 == true) {
						check1 = KiemTraMinMax('firstName', 'tb-firstname',
								'Firstname', 3, 30);
					}

					checkT2 = KiemTraTrong('lastName', 'tb-lastname',
							'Lastname');
					if (checkT2 == true) {
						check2 = KiemTraMinMax('lastName', 'tb-lastname',
								'Lastname', 3, 30);
					}
					checkT3 = KiemTraTrong('phone', 'tb-phone',
							'Phone');
					if(checkT3==true)
						{
						check3 = KiemTraMinMax('phone', 'tb-phone', 'Phone', 9, 13);
						if(check3==true)
							{						
								if (phone_regex.test(phone) == false) {
									$('#tb-phone').css('display', 'block');
									$('#tb-phone').html('(*) Phone Number incorrect ');
									checkPhone=false;
								} else {
									$('#tb-phone').css('display', 'none');
									checkPhone=true;
								}
							}
						}
					if(checkT1==false||checkT2==false||checkT3==false)
						{
							return;
						}
					// var kq = submit();
					if (check1 === false || check2 === false|| check3 === false||checkPhone==false ) {
						return;
					}

					

					$.ajax({
						url : "/CMS/views/EditProfile",
						type : "POST",
						data : {
							firstName : firstName,
							lastName : lastName,
							description : description,
							phone : phone
						},
						success : function(value) {

							if (value === "success") {
								$("#editModal").modal('show');
								$('#btnOK').focus();
							} else {
								alert("Edit Profile Fail!");
							}

						}
					})
				});

function KiemTraRong() {
	var currentPass = getEle('currentPassword').value.trim();
	var newPass = getEle('newPassword').value.trim();
	var confirmNewPass = getEle('confirmNewPassword').value.trim();
	checkT1 = KiemTraTrong('currentPassword', 'tb-currentpass', 'Current password');
	if (checkT1 == true) {	
		checkPassword();
	}
	checkT2 = KiemTraTrong('newPassword', 'tb-newpass', 'New password');
	if (checkT2 == true) {
		check2 = KiemTraMinMax('newPassword', 'tb-newpass', 'New password', 8, 50);
	}
	checkT3 = KiemTraTrong('confirmNewPassword', 'tb-renewpass', 'Re new password');
	if (checkT3 == true) {		
		check3 = KiemTraRepass();
	}
	if (checkT1 == false || checkT2 == false || checkT3 == false || checkLG == false || check2 == false || check3 == false) {
		return false;
	}
	checkPasswordSuccess();
}

function checkPassword() {
	var pass = getEle('currentPassword').value;
	var check = "checkPass"; 
	$.ajax({
		type: "POST",
		url: "/CMS/views/EditProfile",
		data: {
			pass: pass,
			check: check
		},
		async: false,
		success: function(response) {
			if ($.trim(response) === "success") {
				Success("tb-currentpass");
				checkLG = true;
			}
			else {
				Fail("tb-currentpass");
				checkLG = false;
			}
		}
	});
}

function KiemTraRepass() {
	var pass = getEle('newPassword');
	var repass = getEle('confirmNewPassword');
	var thongbao = getEle('tb-renewpass');
	if (pass.value != repass.value) {
		thongbao.style.display = 'block';
		thongbao.innerHTML = "(*) Invalid Repassword";
		return false;
	} else {
		thongbao.style.display = 'none';
		return true;
	}
}

function checkPasswordSuccess() {
	var pass = getEle('newPassword').value;
	var check = "checkPassSuccess"; 
	$.ajax({
		type: "POST",
		url: "/CMS/views/EditProfile",
		data: {
			pass: pass,
			check: check
		},async: false,
		success: function(response) {
			if ($.trim(response) === "success") {
				Success("tb-submit");	
				window.location = "../Login.jsp";
				
			}
			else {
				Fail("tb-submit");				
			}
		}		
	});
}

$("#btnUpdatePassword").click(function() {	
	KiemTraRong();
});

document.getElementById("firstName").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#buttonEdit").focus();
	 $("#buttonEdit").click();
	}
	});
document.getElementById("lastName").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#buttonEdit").focus();
	 $("#buttonEdit").click();
	}
	});
document.getElementById("buttonReset").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#buttonReset").focus();
	 $("#buttonReset").click();
	}
	});
document.getElementById("buttonEdit").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#buttonEdit").focus();
	 $("#buttonEdit").click();
	}
	});
document.getElementById("description").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#buttonEdit").focus();
	 $("#buttonEdit").click();
	}
	});

document.getElementById("phone").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#buttonEdit").focus();
	 $("#buttonEdit").click();
	}
	});

document.getElementById("currentPassword").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#btnUpdatePassword").focus();
	 $("#btnUpdatePassword").click();
	}
	});

document.getElementById("newPassword").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#btnUpdatePassword").focus();
	 $("#btnUpdatePassword").click();
	}
	});

document.getElementById("confirmNewPassword").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#btnUpdatePassword").focus();
	 $("#btnUpdatePassword").click();
	}
	});

document.getElementById("aChangePass").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#changePasswordModal").modal("show");	 
	}
	});

document.getElementById("btnUpdatePassword").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#btnUpdatePassword").focus();
	 $("#btnUpdatePassword").click();
	}
	});

function KiemTraMinMax(idTag, TB, content, min, max) {
	var inputTag = getEle(idTag).value.trim();
	;
	var thongbao = getEle(TB);
	if (inputTag.length < min || inputTag.length > max) {
		thongbao.innerHTML = "(*) " + content + " must be between " + min
				+ " and " + max + " characters";
		thongbao.style.display = "block";
		return false;
	} else {
		thongbao.style.display = "none";
		return true;

	}
}
function KiemTraTrong(idTag, TB, content) {
	var inputTag = getEle(idTag).value.trim();
	var thongbao = getEle(TB);
	if (inputTag == "") {
		thongbao.innerHTML = "(*) " + content + " must be fill in ";
		thongbao.style.display = "block";
		return false;
	} else {
		thongbao.style.display = "none";
		return true;
	}
}

function Success(TB) {
	var thongbao = getEle(TB);
	thongbao.style.display = "none";
}

function Fail(TB) {
	var thongbao = getEle(TB);
	thongbao.innerHTML = "(*)Wrong password. Please try again! ";
	thongbao.style.display = "block";

}