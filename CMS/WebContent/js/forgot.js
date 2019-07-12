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
}function KiemTraRepass() {
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
$(".btnSubmit").click(function() {

	Register();
});
function Register() {
	/*return KiemTraRong() && KiemTraMinMax('user', 'tb-user', "Username", 3, 50)
			&& KiemTraMinMax('email', 'tb-email', "Email", 5, 50)
			&& KiemTraEmail()
			&& KiemTraMinMax('pass', 'tb-pass', "Password", 8, 50) &&

			KiemTraRepass();*/
	
	checkT3 = KiemTraTrong('pass', 'tb-pass', 'Password');
	if (checkT3 == true) {
		check3 = KiemTraMinMax('pass', 'tb-pass', 'Password', 8, 50);

	}
	checkT4 = KiemTraTrong('repass', 'tb-repass', 'RePassword');
	if (checkT4 == true) {
		check4 = KiemTraRepass();

	}
	if (checkT3 == false||checkT4==false) {
		return false;
	}

	 if ( check3 == false||check4==false) {
			return false;
		}
		/*alert("gg");*/
		loginSuccess();
	
	

}
function getEle(element) {
	return document.getElementById(element);
}
function loginSuccess()
{
	
	var pass =getEle("pass").value;
	
	var check="newpass";
	$.ajax({
		type : "post",
		url : "/CMS/views/Register",
		data : {
			pass:pass,
			check : check
		}, async: false,
		success : function(response) {
			if ($.trim(response) == "success") {
				window.location = "../Login.jsp";
			}
			else {
				//alert("error 404");
			}
		}
	});
}