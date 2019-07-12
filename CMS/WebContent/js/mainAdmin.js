document.addEventListener("DOMContentLoaded", function(event) {
	// do work
	$("#view").addClass("active");
	var check = 3;
	document.getElementById("user-profile").onclick = function() {
		$("#view").removeClass('active')
		$("#note").removeClass('active');
		if (check != 1) {
				
			changeContent('EditProfile.jsp');
			$(".content").css("height", "113%");
			check=1;
		}

	}

	// };
	function changeContent(fileName) {
		$('#content').load(fileName);
		// duongDanHienTai = window.location.href;
		//		
		// window.location = duongDanHienTai +"/views/"+fileName;
		// link đứng từ file js
	}
	;
	
	changeContent("AddMember.jsp");
	document.getElementById("note").onclick = function() {
		if (check != 2) {
			
			$("#view").removeClass('active')
			$("#note").addClass('active');
			$(".content").css("height", "93%");
			$('#loading').css('display', 'block');
			$('#content').css('display', 'none');
			changeContent('ContentAdmin.jsp');
			/*sleep(5000);
			
			changeContent('FormContent.jsp');
			$('#loading').css('display', 'none');
			$('#content').css('display', 'block');
			check = 2;
			$("#view").removeClass('active')
			$("#note").addClass('active');*/
			$('.content__left').css('pointer-events',"none");
			$('.header__user-detail').css('pointer-events',"none");
			removeEvent()
			setTimeout(function() {
				// do something special
				$('#loading').css('display', 'none');

				$('#content').css('display', 'block');
				check = 2;
				$('.content__left').css('pointer-events',"auto");
				$('.header__user-detail').css('pointer-events',"auto");
				addEvent()
				
			}, 5000);
			
		}
	};
	function addEvent()
	{
		document.getElementById("note").addEventListener("keyup", noteEnter);
		document.getElementById("view").addEventListener("keyup",viewEnter);
		document.getElementById("aLogout").addEventListener("keyup", aLogoutEnter);
		document.getElementById("user-profile").addEventListener("keyup", userProfileEnter);
	}
	addEvent();
	function removeEvent()
	{
		document.getElementById("note").removeEventListener("keyup", noteEnter);
		document.getElementById("view").removeEventListener("keyup",viewEnter);
		document.getElementById("aLogout").removeEventListener("keyup", aLogoutEnter);
		document.getElementById("user-profile").removeEventListener("keyup", userProfileEnter);
	}
	function sleep(ms) {
		  var start = new Date().getTime(), expire = start + ms;
		  while (new Date().getTime() < expire) { }
		  return;
		}
	document.getElementById("view").onclick = function() {
		if (check != 3) {
			$("#view").addClass('active')
			$("#note").removeClass('active');
			$(".content").css("height", "93%");
			$('#loading').css('display', 'block');
			$('#content').css('display', 'none');
			$('.content__left').css('pointer-events',"none");
			$('.header__user-detail').css('pointer-events',"none");
			
			changeContent('AddMember.jsp');
			 document.getElementById("view").removeEventListener("keyup", viewEnter);
			 removeEvent()
			setTimeout(function() {
				// do something special
				$('#loading').css('display', 'none');

				$('#content').css('display', 'block');
				check = 3;
				$('.content__left').css('pointer-events',"auto");
				$('.header__user-detail').css('pointer-events',"auto");
				
				addEvent()
			}, 5000);
			
		} else {
			
			changeContent('AddMember.jsp');
		}

	};
	function disableButton()
	{
		document.getElementById("view").disabled = true;
		document.getElementById("note").disabled = true;
		document.getElementById("aLogout").disabled = true;
		document.getElementById("user-profile").disabled = true;
	}
	function enableButton()
	{
		document.getElementById("view").disabled = false;
		document.getElementById("note").disabled = false;
		document.getElementById("aLogout").disabled = false;
		document.getElementById("user-profile").disabled = false;
	}
	
	
	function viewEnter(event) {	
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			document.getElementById("view").click();
		}
	}
	function userProfileEnter(event) {
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			document.getElementById("user-profile").click();
		}
	}
	function noteEnter(event) {
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			document.getElementById("note").click();
		}
	}
	function aLogoutEnter(event) {
		// Number 13 is the "Enter" key on the keyboard
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			window.location=document.getElementById('aLogout').href;
		}
	}
	// $("#logout").click(function() {
	//
	// $.ajax({
	// url : "/Logout",
	// type : "Post",
	// success : function(value) {
	// if (value === "true") {
	// duongDanHienTai = window.location.href;
	// duongDan = duongDanHienTai.replace("dangnhap/", "");
	// window.location = duongDan;
	// } else {
	// alert(window.location.href);
	// }
	// }
	// })
	// });
	/*
	 * $(".header__user").click(function() {
	 * $(".header__user-detail").css('display', 'block'); });
	 */
});
