function getEle(element) {
	return document.getElementById(element);
}
var title = "";
var brief = "";
var id = "";
var content = "";


$(".btnEdit").click(function(){
	title = $(this).attr('data-title');
	brief = $(this).attr('data-brief');
	var username = $(this).attr('data-username');
	
	$(".username").html(username);
	content = $(this).attr('data-content');
	$('#title-edit').val(title);
	$('#brief-edit').val(brief);
	$('.id-update').val(id);
	$('#content-edit').val(content);
})
$("#btnReset").click(function() {
	$("#title-edit").val(title);
	$("#brief-edit").val(brief);
	$('.id-update').val(id);
	$("#content-edit").val(content);
	$(".sp-thongbao").css('display', 'none');
});

$("#btnUpdate").click(
		function() {
			var title = getEle("title-edit").value.trim();
			var brief = getEle("brief-edit").value.trim();
			var	id = getEle("tb-brief").value.trim();
			var contentEdit = getEle("content-edit").value.trim();
			var	dataButton = $(this).attr('data-button');
			 var thongbao = $('#tb-title'); 
			
			 /*if(title==""||brief==""||contentEdit=="") { alert("You must fill all"); return; }*/
			 

			checkT1 = KiemTraTrong('title-edit', 'tb-title', 'Title');
			if (checkT1 == true) {
				check1 = KiemTraMinMax('title-edit', 'tb-title', 'Title', 10, 200);
			}

			checkT2 = KiemTraTrong('brief-edit', 'tb-brief', 'Brief');
			if (checkT2 == true) {
				check2 = KiemTraMinMax('brief-edit', 'tb-brief', 'Brief', 30, 150);
			}
			checkT3 = KiemTraTrong('content-edit', 'tb-content', 'Content');
			if (checkT3 == true) {
				check3 = KiemTraMinMax('content-edit', 'tb-content', 'Content',
						50, 1000);
			}

			// var kq = submit();
			if (checkT1 == false || checkT2 == false || checkT3 == false) {
				return;
			}
			if (check1 === false || check2 === false || check3 === false) {
				return;
			}
			$.ajax({
				url : "/CMS/views/ViewContent",
				type : "POST",
				data : {
					title : title,
					brief : brief,
					id : id,
					content : contentEdit,
					dataButton : dataButton,
				},
				success : function(response) {
					if ($.trim(response) == "success") {
						$("#content").load("ContentAdmin.jsp");
						/* $("#editModal").css("display", "none"); */
						$("#editModal").modal("hide");
					}
				}
			})
		});

$("#btnAdd").click(
		function() {
			var title1 = getEle("title-add").value.trim();
			var brief1 = getEle("brief-add").value.trim();
			var contentEdit1 = getEle("content-add").value.trim();
			/*var	dataButton1 = $(this).attr('data-button');*/
			 /*var thongbao = $('#tb-title'); */
			
			 /*if(title==""||brief==""||contentEdit=="") { alert("You must fill all"); return; }*/
			 

			checkT4 = KiemTraTrong('title-add', 'tb-title-add', 'Title');
			if (checkT4 == true) {
				check4 = KiemTraMinMax('title-add', 'tb-title-add', 'Title', 10, 200);
			}

			checkT5 = KiemTraTrong('brief-add', 'tb-brief-add', 'Brief');
			if (checkT5 == true) {
				check5 = KiemTraMinMax('brief-add', 'tb-brief-add', 'Brief', 30, 150);
			}
			checkT6 = KiemTraTrong('content-add', 'tb-content-add', 'Content');
			if (checkT6 == true) {
				check6 = KiemTraMinMax('content-add', 'tb-content-add', 'Content',
						50, 1000);
			}

			// var kq = submit();
			if (checkT4 == false || checkT5 == false || checkT6 == false) {
				return;
			}
			if (check4 === false || check5 === false || check6 === false) {
				return;
			}
			$.ajax({
				url : "/CMS/views/FormContent",
				type : "POST",
				data : {
					title : title1,
					brief : brief1,
					content : contentEdit1,
				},
				success : function(value) {
					if (value == "true") {
						/*$("#addContent").modal('show');*/
						/*$('#btnOK').focus();*/
						$("#content").load("ContentAdmin.jsp");
						$("#addModal").modal('hide');
						
					} else {
						alert("Add Content Fail!");
					}

				}
				/*success : function(response) {
					if ($.trim(response) == "success") {
						$("#content").load("FormContent.jsp");
						 $("#editModal").css("display", "none"); 
						$("#addModal").modal("hide");
					}
				}*/
			})
		});


$(".btnDelete").click(function() {
	var id = $(this).attr('data-id');
	var title = $(this).attr('data-title');
	$('.text').text("Do You Want To Delete " + title + "?")
	$('.id-delete').val(id);
});

$(".delete").click(function() {
	var id = $('#id-delete').val();
	var dataButton = $(this).attr('data-button');
	$.ajax({
		type : "post",
		url : "/CMS/views/ViewContent",
		data : {
			id : id,
			dataButton : dataButton
		},
		success : function(response) {
			if ($.trim(response) == "success") {
				$("#content").load("ContentAdmin.jsp");
				/* $("#editModal").css("display", "none"); */
				$("#deleteModal").modal("hide");
			}
		}
	});
});
$('.btnSearch').click(function(event) {
	event.preventDefault();
	/* Act on the event */
	var tukhoa = $('#input-search').val().toLowerCase();
	$(".table td.colTitle:containsIN('" + tukhoa + "')").parent().show();
	$(".table td.colTitle:not(:containsIN('" + tukhoa + "'))").parent().hide();
	
	/*
	 * $('.table-content .rows').filter(function() {
	 * $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa) > -1); });
	 */

});
$('.modal').on('hidden.bs.modal', function (e) {
	  $(this)
	    .find("input,textarea,select")
	       .val('')
	       .end()
	    .find("input[type=checkbox], input[type=radio]")
	       .prop("checked", "")
	       .end();
	})
	$('#btnResetTrang').on('click', function (e) {
	  $(".modal")
	    .find("input,textarea,select")
	       .val('')
	       .end()
	    .find("input[type=checkbox], input[type=radio]")
	       .prop("checked", "")
	       .end();
	})
document.getElementById("input-search").addEventListener(
		"keyup",
		function(event) {
			// Number 13 is the "Enter" key on the keyboard
			if (event.keyCode === 13) {
				// Cancel the default action, if needed
				event.preventDefault();
				// Trigger the button element with a click
				var tukhoa = $('#input-search').val().toLowerCase();

				$(".table td.colTitle:containsIN('" + tukhoa + "')").parent()
						.show();
				$(".table td.colTitle:not(:containsIN('" + tukhoa + "'))")
						.parent().hide();
			}
		});
document.getElementById("content-edit").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$("#btnSubmit").focus();
		$("#btnSubmit").click();
	}
});
document.getElementById("brief-edit").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$("#btnUpdate").focus();
		$("#btnUpdate").click();
	}
});
document.getElementById("title-edit").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$("#btnUpdate").focus();
		$("#btnUpdate").click();
	}
});
document.getElementById("btnUpdate").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$("#btnUpdate").focus();
		$("#btnUpdate").click();
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

document.getElementById("btnAdd").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$("#btnAdd").focus();
		$("#btnAdd").click();
	}
});
document.getElementById("title-add").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$("#btnAdd").focus();
		$("#btnAdd").click();
	}
});
document.getElementById("brief-add").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$("#btnAdd").focus();
		$("#btnAdd").click();
	}
});
document.getElementById("content-add").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$("#btnAdd").focus();
		$("#btnAdd").click();
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
