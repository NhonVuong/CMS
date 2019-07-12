function getEle(element) {
	return document.getElementById(element);
}
var user = "";
var email = "";
var id = "";
var phone = "";
var pass="";
$(".btnEdit").click(function() {
	user = $(this).attr('data-user');
	email = $(this).attr('data-email');
	pass= $(this).attr('data-pass');
	id = $(this).attr('data-id');
	phone = $(this).attr('data-phone');
	firstname=$(this).attr('data-firtname');
	lastname=$(this).attr('data-lastname');
	des=$(this).attr('data-des');
	$('.username').val(user);
	$('.pass').val(pass);
	$('.email').val(email);
	$('.id-update').val(id);
	$('.phone').val(phone);
	$('.firstname').val(firstname);
	$('.lastname').val(lastname);
	$('.descrip').val(des);
});
$("#btnReset").click(function() {
	$('.username').val(user);
	$('.email').val(email);
	$('.id-update').val(id);
	$('.phone').val(phone);
	$('.firstname').val(firstname);
	$('.lastname').val(lastname);
	$('.descrip').val(des);
	displayNone();
})
function displayNone() {
	
	
	 getEle("tb-firstname").style.display = "none";
	 getEle("tb-lastname").style.display = "none";
	 getEle("tb-username").style.display = "none";
	 getEle("tb-email").style.display = "none";
	 getEle("tb-phone").style.display = "none";
	 getEle("tb-descrip").style.display = "none";
}
$(".update").click(
		function() {
		var	user = getEle("username").value.trim();
		var password=getEle("pass").value.trim();
		var	phone = getEle("phone").value.trim();
		var	id = getEle("id-update").value.trim();
		var firstname=getEle("firstname").value.trim();
		var lastname=getEle("lastname").value.trim();
		var des=getEle("descrip").value.trim();
		var	dataButton = $(this).attr('data-button');
		var phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
			checkT1 = KiemTraTrong('firstname', 'tb-firstname', 'FirstName');
			if (checkT1 == true) {
				check1 = KiemTraMinMax('firstname', 'tb-firstname', 'FirstName', 3, 30);
			}
			checkT2 = KiemTraTrong('lastname', 'tb-lastname', 'LastName');
			if (checkT2 == true) {
				check2 = KiemTraMinMax('lastname', 'tb-lastname', 'LastName', 3, 30);
			}
			checkT3 = KiemTraTrong('username', 'tb-username', 'Username');
			if (checkT3 == true) {
				check3 = KiemTraMinMax('username', 'tb-username', 'Username', 3, 30);
			}
			checkT4 = KiemTraTrong('phone', 'tb-phone', 'Phone');
			if (checkT4 == true) {
				check4 = KiemTraMinMax('phone', 'tb-phone', 'Phone', 9, 13);
				if(check4==true)
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
			checkT5 = KiemTraTrong('pass', 'tb-pass', 'Pass');
			if (checkT5 == true) {
				check5 = KiemTraMinMax('pass', 'tb-pass', 'Pass', 8, 50);
			}
			// var kq = submit();
			if (checkT1 == false || checkT2 == false || checkT3 == false || checkT4 == false||checkT5==false) {
				return;	
			}
			if (check1 === false || check2 === false || check3 == false ||check4 == false||checkPhone==false||check5==false) {
				return;
			}
			
			if(pass!=password)
				{
				pass=password;
				}
			else
				{
				pass="";
				}
			$.ajax({
				type : "post",
				url : "/CMS/views/MemberController",
				data : {
					user : user,
					email : email,
					phone : phone,
					id : id,
					firstname:firstname,
					lastname:lastname,
					des:des,
					pass:pass,
					dataButton : dataButton
				},
				success : function(response) {
					if ($.trim(response) == "success") {
						$("#content").load("AddMember.jsp");
						/* $("#editModal").css("display", "none"); */
						$("#editModal").modal("hide");
					}
				}
			});
		});
$(".btnDelete").click(function() {
	var id = $(this).attr('data-id');
	var user =$(this).attr('data-username');
	$('.id-delete').val(id);
	$(".tb-delete").html("Do you want to delete "+user+"?");
});
$(".delete").click(function() {
	var id = $('#id-delete').val();
	var dataButton = $(this).attr('data-button');
	$.ajax({
		type : "post",
		url : "/CMS/views/MemberController",
		data : {
			id : id,
			dataButton : dataButton
		},
		success : function(response) {
			if ($.trim(response) == "success") {
				$("#content").load("AddMember.jsp");
				 $("#editModal").css("display", "none"); 
				$("#deleteModal").modal("hide");
			}
		}
	});
});
document.getElementById("firstname").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".update").focus();
		$(".update").click();
	}
});
document.getElementById("lastname").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".update").focus();
		$(".update").click();
	}
});
document.getElementById("username").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".update").focus();
		$(".update").click();
	}
});
document.getElementById("email").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".update").focus();
		$(".update").click();
	}
});
document.getElementById("phone").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".update").focus();
		$(".update").click();
	}
});
document.getElementById("descrip").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".update").focus();
		$(".update").click();
	}
});
document.getElementById("btnUpdate").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".update").focus();
		$(".update").click();
	}
});
document.getElementById("btnReset").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$("#btnReset").focus();
		$("#btnReset").click();
	}
});
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

$('.btnSearch').click(function(event) {
	event.preventDefault();
	 
	var tukhoa = $('#input-search').val().toLowerCase();
	$(".table td.col-username:containsIN('" + tukhoa + "')").parent().show();
	$(".table td.col-username:not(:containsIN('" + tukhoa + "'))").parent().hide();
	$(".table td.col-email:containsIN('" + tukhoa + "')").parent().show();
	$(".table td.col-phone:containsIN('" + tukhoa + "')").parent().show();
//	$(".pagi").css
//	$(".table td.col-email:not(:containsIN('" + tukhoa + "'))").parent().hide();
	
});
$.extend($.expr[":"], {
	"containsIN" : function(elem, i, match, array) {
		return (elem.textContent || elem.innerText || "").toLowerCase()
				.indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});

document.getElementById("input-search").addEventListener(
		"keyup",
		function(event) {
			// Number 13 is the "Enter" key on the keyboard
			if (event.keyCode === 13) {
				// Cancel the default action, if needed
				event.preventDefault();
				// Trigger the button element with a click
				var tukhoa = $('#input-search').val().toLowerCase();

				$(".table td.col-username:containsIN('" + tukhoa + "')").parent().show();
				$(".table td.col-username:not(:containsIN('" + tukhoa + "'))").parent().hide();
				$(".table td.col-email:containsIN('" + tukhoa + "')").parent().show();
				$(".table td.col-phone:containsIN('" + tukhoa + "')").parent().show();
			}
		});

/*



 * document.getElementById("btnClose").addEventListener("keyup", function(event) { //
 * Number 13 is the "Enter" key on the keyboard if (event.keyCode === 13) { //
 * Cancel the default action, if needed event.preventDefault(); alert("hh"); //
 * Trigger the button element with a click $("#deleteModal").modal("hide"); }
 * });
 


*/