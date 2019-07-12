function getEle(element) {
	return document.getElementById(element);
}

$("#btnSubmit").click(
		function() {
			var title = getEle("title").value.trim();
			var brief = getEle("brief").value.trim();
			var contentEdit = getEle("contentEdit").value.trim();
			/* var thongbao = $('#tb-title'); */
			/*
			 * if(title==""||brief==""||description=="") { alert("You must fill
			 * all"); return; }
			 */
			
			checkT1 = KiemTraTrong('title', 'tb-title', 'Title');
			if (checkT1 == true) {
				check1 = KiemTraMinMax('title', 'tb-title', 'Title', 10, 200);
			}

			checkT2 = KiemTraTrong('brief', 'tb-brief', 'Brief');
			if (checkT2 == true) {
				check2 = KiemTraMinMax('brief', 'tb-brief', 'Brief', 30, 150);
			}
			checkT3 = KiemTraTrong('contentEdit', 'tb-descrip', 'Content');
			if (checkT3 == true) {
				check3 = KiemTraMinMax('contentEdit', 'tb-descrip', 'Content',
						50, 1000);
			}

			// var kq = submit();
			if(checkT1==false||checkT2==false||checkT3==false)
			{
				return;
			}
			if (check1 === false || check2 === false || check3 === false) {
				return;
			}
			$.ajax({
				url : "/CMS/views/FormContent",
				type : "POST",
				data : {
					title : title,
					brief : brief,
					content : contentEdit
				},
				success : function(value) {
					if (value == "true") {
						$("#editModal").modal('show');
						$('#btnOK').focus();
					} else {
						alert("Add Content Fail!");
					}

				}
			})
		});

document.getElementById("contentEdit").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#btnSubmit").focus();
	 $("#btnSubmit").click();
	}
	});
document.getElementById("brief").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#btnSubmit").focus();
	 $("#btnSubmit").click();
	}
	});
document.getElementById("title").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#btnSubmit").focus();
	 $("#btnSubmit").click();
	}
	});
document.getElementById("btnSubmit").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
	 // Cancel the default action, if needed
	 event.preventDefault();
	 // Trigger the button element with a click
	 $("#btnSubmit").focus();
	 $("#btnSubmit").click();
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


$("#btnReset").click(function() {
	$("#title").val('');
	$("#brief").val('');
	$("#contentEdit").val('');
	$(".sp-thongbao").css('display', 'none');
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
