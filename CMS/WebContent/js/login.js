function getEle(element) {
	return document.getElementById(element);
}
var checkLG = false;
function KiemTraRong() {
	Success("tb-submit");
	var email = getEle('email').value.trim();
	var pass = getEle('pass').value.trim();

	checkT1 = KiemTraTrong('email', 'tb-email', 'Email');

	checkT2 = KiemTraTrong('pass', 'tb-pass', 'Password');

	if (checkT2 == false || checkT1 == false) {
		return false;
	}
	CheckLogin();
	
}

function CheckLogin() {

	var email = getEle("email").value.trim();
	var pass = getEle("pass").value;
	 var checkRemember = document.getElementById('checkbox');
	 var remember =null;
	 if ($('#checkbox').is(':checked')) 
		 {
		 	remember = getEle("checkbox").value;
		 }
	 
	
	var checklogin = "login";

	$.ajax({
		type : "post",
		url : "/CMS/Login",
		data : {
			email : email,
			pass : pass,
			check : checklogin,
			remember:remember
		},
		success : function(response) {
			if ($.trim(response) == "success") {
				Success("tb-submit");
				checkLG = true;
				window.location = "views/MainPage.jsp";
				;
			} 
			else if ($.trim(response) == "successAdmin") {
				Success("tb-submit");
				checkLG = true;
				window.location = "views/MainPageAdmin.jsp";
				;
			} 
			else if($.trim(response) == "notActivated")
				{
				notActivated("tb-submit");
				checkLG = false;
				}
			else {
				Fail("tb-submit");
				checkLG = false;
			}
		}
	});
}
$(".reset").click(function(){
	if(KiemTraTrong('emailFG', 'tb-emailFG', 'E-mail')==true&&KiemTraEmail("emailFG")==true)
		{
		var email = getEle("emailFG").value.trim();
		var checklogin = "forgot";
		var remember =null;
		$.ajax({
			type : "post",
			url : "/CMS/Login",
			data : {
				
				check : checklogin,
				email:email
			},
			success : function(response) {
				if ($.trim(response) == "success") {
					$("#forgetModal").modal("hide");
					$("#editModal").modal('show');
//					window.location = "views/MainPage.jsp"
				} 
				
				else {
					var thongbao = getEle('tb-emailFG');
					thongbao.style.display = 'block';
					thongbao.innerHTML = "(*) Err send Email ";
				}
			}
		});
		};
})
function loginSuccess() {

	var email = getEle("email").value.trim();
	var pass = getEle("pass").value;

	$.ajax({
		type : "post",
		url : "/CMS/Login",
		data : {
			email : email,
			pass : pass

		},
		success : function(response) {
			if ($.trim(response) == "success") {
				Success("tb-submit");
				checkLG = true;

				;
			} else {
				Fail("tb-submit");
				checkLG = false;
			}
		}
	});
}
function KiemTraEmail(idTag) {
	var inputTag = getEle(idTag);
	var thongbao = getEle('tb-emailFG');
	var email = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
			+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
	if (inputTag.value.match(email)) {
		thongbao.style.display = 'none';
		return true;
	} else {
		thongbao.style.display = 'block';
		thongbao.innerHTML = "(*) Invalid Email ";
		return false;
	}
}

// Execute a function when the user releases a key on the keyboard
document.getElementById("email").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".btnSubmit").focus();
		$(".btnSubmit").click();
	}
});
document.getElementById("btnSubmit").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".btnSubmit").focus();
		$(".btnSubmit").click();
	}
});
document.getElementById("checkbox").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		var checkRemember = document.getElementById('checkbox');
		if (checkRemember.checked) {
			checkRemember.checked = false;
		} else {
			checkRemember.checked = true;
		}

	}
});
document.getElementById("pass").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".btnSubmit").focus();
		$(".btnSubmit").click();
	}
});
function KiemTraTrong(idTag, TB, content) {
	var inputTag = getEle(idTag).value.trim();
	;
	var thongbao = getEle(TB);
	if (inputTag == "") {
		thongbao.innerHTML = "(*) Please enter your " + content ;
		thongbao.style.display = "block";
		return false;
	} else {
		thongbao.style.display = "none";
		return true;
	}
}
$(".btnSubmit").click(function() {

	 KiemTraRong();
});
function Login() {
	return KiemTraRong();

}
function Success(TB) {
	var thongbao = getEle(TB);
	thongbao.style.display = "none";
}
function Fail(TB) {

	var thongbao = getEle(TB);
	thongbao.innerHTML = "(*)Wrong email or password. Please try again! ";
	thongbao.style.display = "block";

}
function notActivated(TB) {

	var thongbao = getEle(TB);
	thongbao.innerHTML = "(*)Account is not activated! ";
	thongbao.style.display = "block";

}