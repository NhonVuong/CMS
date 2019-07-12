function getEle(element) {
	return document.getElementById(element);
}
var checkEmail=false;
var checkUserName=false;

function KiemTraRong() {
	var user = getEle('user').value;
	var email = getEle('email').value;
	var pass = getEle('pass').value;
	var repass = getEle('repass').value;
	var thongbao = getEle('tb-submit');
	if (user == "" || email == "" || pass == "" || repass == "") {
		thongbao.innerHTML = "(*) Please fill in all required fields";
		thongbao.style.display = "block";

		return false;
	} else {
		thongbao.style.display = "none";
		return true;
	}
}

function KiemTraMinMax(idTag, TB, content, min, max) {
	var inputTag = getEle(idTag).value.trim();
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

function KiemTraEmail() {
	var inputTag = getEle('email');
	var thongbao = getEle('tb-email');
	var email = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
			+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
	if (inputTag.value.match(email)) {
		thongbao.style.display = 'none';
		return true;
	} else {
		thongbao.style.display = 'block';
		thongbao.innerHTML = "(*) Invaid Email ";
		return false;
	}
}

function KiemTraRepass() {
	var pass = getEle('pass');
	var repass = getEle('repass');
	var thongbao = getEle('tb-repass');
	if (pass.value != repass.value) {
		thongbao.style.display = 'block';
		thongbao.innerHTML = "(*) Invalid Repassword";
		return false;
	} else {
		thongbao.style.display = 'none';
		return true;
	}

}
document.getElementById("user").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $(".btnSubmit").focus();
	 $(".btnSubmit").click();
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
document.getElementById("repass").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $(".btnSubmit").focus();
	 $(".btnSubmit").click();
	}
	});
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
$(".btnSubmit").click(function() {

	Register();
});
function Register() {
	/*return KiemTraRong() && KiemTraMinMax('user', 'tb-user', "Username", 3, 50)
			&& KiemTraMinMax('email', 'tb-email', "Email", 5, 50)
			&& KiemTraEmail()
			&& KiemTraMinMax('pass', 'tb-pass', "Password", 8, 50) &&

			KiemTraRepass();*/
	checkT1 = KiemTraTrong('user', 'tb-user', 'Username');
	if (checkT1 == true) {
		check1 = KiemTraMinMax('user', 'tb-user', 'Username', 3, 50);
		if(check1==true)
			{
				ExistUserName();
			}
	}
	checkT2 = KiemTraTrong('email', 'tb-email', 'Email');
	if (checkT2 == true) {
		check2 = KiemTraMinMax('email', 'tb-email', 'Email', 5, 50);
		if (check2 == true) {
			if (KiemTraEmail() == false) {
				checkEmail = false;
			} else {
				
				ExistEmail();
			}
		}
	}
	checkT3 = KiemTraTrong('pass', 'tb-pass', 'Password');
	if (checkT3 == true) {
		check3 = KiemTraMinMax('pass', 'tb-pass', 'Password', 8, 50);

	}
	checkT4 = KiemTraTrong('repass', 'tb-repass', 'RePassword');
	if (checkT4 == true) {
		check4 = KiemTraRepass();

	}
	if (checkT2 == false || checkT1 == false || checkT3 == false||checkT4==false) {
		return false;
	}
//	 $(document).ajaxComplete(function () {
//	      // 0 === $.active
//		 if (check1 == false || check2 == false || check3 == false||check4==false
//					|| checkEmail == false||checkUserName==false) {
//				return false;
//			}
//			/*alert("gg");*/
//			loginSuccess();
//	  });
	/*$.when( ExistEmail(), ExistUserName() ).then(function () {
		if (check1 == false || check2 == false || check3 == false||check4==false
				|| checkEmail == false||checkUserName==false) {
			return false;
		}
		alert("gg");
		loginSuccess();
	});*/
	// var kq = submit();
	 if (check1 == false || check2 == false || check3 == false||check4==false
				|| checkEmail == false||checkUserName==false) {
			return false;
		}
		/*alert("gg");*/
		loginSuccess();
	
	

}
function loginSuccess()
{
	var email=getEle("email").value.trim();
	var pass =getEle("pass").value;
	var username=getEle("user").value.trim();
	var check = null;
	$.ajax({
		type : "post",
		url : "/CMS/views/Register",
		data : {
			email:email,
			pass:pass,
			username:username,
			check : check
		}, async: false,
		success : function(response) {
			if ($.trim(response) == "success") {
				
			}
			else {
				//alert("error 404");
			}
		},
		 complete: function() {
			 $("#editModal").modal('show');
		        // This function will be triggered always, when ajax request is completed, even it fails/returns other status code
			// window.location = "../Login.jsp";
		    },
	});
}
$("#btnOK").click(function(){
	window.location = "../Login.jsp";
})
function ExistEmail()
{
	var email=getEle("email").value.trim();
	var check = "mail";
	$.ajax({
		type : "post",
		url : "/CMS/views/Register",
		data : {
			email:email,
			check : check
		}, async: false,
		success : function(response) {
			if ($.trim(response) == "success") {
				checkEmail= true;
				NotExist("tb-email");
				
			}
			else {
				checkEmail= false;
				Existed("tb-email","Email");
				
			}
		}
	});
}
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
function ExistUserName()
{
	var username=getEle("user").value.trim();
	var check = "username";
	$.ajax({
		type : "post",
		url : "/CMS/views/Register",
		data : {
			username:username,
			check : check
		},
		 async: false,
		success : function(response) {
			if ($.trim(response) == "success") {
				checkUserName= true;
				NotExist("tb-user");
				
			}
			else {
				checkUserName= false;
				Existed("tb-user","Username");
				
			}
		}
	});
}
function KiemTraTrong(idTag, TB, content) {
	var inputTag = getEle(idTag).value.trim();
	;
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
function Existed( TB, content) {
	
	var thongbao = getEle(TB);
		thongbao.innerHTML = "(*) " + content + " was used ";
		thongbao.style.display = "block";
	
}
function NotExist(TB)
{
	var thongbao = getEle(TB);
	thongbao.style.display = "none";
	}