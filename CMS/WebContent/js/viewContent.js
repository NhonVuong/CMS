function getEle(element) {
	return document.getElementById(element);
}
var title = "";
var brief = "";
var id = "";
var content = "";
$(".btnEdit").click(function() {
	title = $(this).attr('data-title');
	brief = $(this).attr('data-brief');
	id = $(this).attr('data-id');
	content = $(this).attr('data-content');
	$('#title').val(title);
	$('.brief').val(brief);
	$('.id-update').val(id);
	$('.content').val(content);
});
$("#btnReset").click(function() {
	$('#title').val(title);
	$('.brief').val(brief);
	$('.id-update').val(id);
	$('.content').val(content);
	displayNone();
})
function displayNone() {
	
	
	 getEle("tb-title").style.display = "none";
	 getEle("id-update").style.display = "none";
	 getEle("id-updateContent").style.display = "none";
		
	
}
$(".update").click(
		function() {
		var	title = getEle("title").value.trim();
		var	brief = getEle("brief").value.trim();
		var	id = getEle("id-update").value.trim();
		var	dataButton = $(this).attr('data-button');
		var	content = getEle("content-view").value.trim();
			checkT1 = KiemTraTrong('title', 'tb-title', 'Title');
			if (checkT1 == true) {
				check1 = KiemTraMinMax('title', 'tb-title', 'Title', 10, 200);
			}

			checkT2 = KiemTraTrong('brief', 'id-update', 'Brief');
			if (checkT2 == true) {
				check2 = KiemTraMinMax('brief', 'id-update', 'Brief', 30, 150);
			}
			checkT3 = KiemTraTrong('content-view', 'id-updateContent',
					'Content');
			if (checkT3 == true) {
				check3 = KiemTraMinMax('content-view', 'id-updateContent',
						'Content', 50, 1000);
			}

			// var kq = submit();
			if (checkT1 == false || checkT2 == false || checkT3 == false) {
				return;
			}
			if (check1 === false || check2 === false || check3 == false) {
				return;
			}
			$.ajax({
				type : "post",
				url : "/CMS/views/ViewContent",
				data : {
					title : title,
					brief : brief,
					content : content,
					id : id,
					dataButton : dataButton
				},
				success : function(response) {
					if ($.trim(response) == "success") {
						$("#content").load("ViewContent.jsp");
						/* $("#editModal").css("display", "none"); */
						$("#editModal").modal("hide");
					}
				}
			});
		});
document.getElementById("title").addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".update").focus();
		$(".update").click();
	}
});
document.getElementById("brief").addEventListener("keyup", function(event) {
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
document.getElementById("content-view").addEventListener("keyup",
		function(event) {
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

/*
 * document.getElementById("btnClose").addEventListener("keyup", function(event) { //
 * Number 13 is the "Enter" key on the keyboard if (event.keyCode === 13) { //
 * Cancel the default action, if needed event.preventDefault(); alert("hh"); //
 * Trigger the button element with a click $("#deleteModal").modal("hide"); }
 * });
 */
$(".btnDelete").click(function() {
	var id = $(this).attr('data-id');
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
				$("#content").load("ViewContent.jsp");
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

				$(".table td.colTitle:containsIN('" + tukhoa + "')").parent()
						.show();
				$(".table td.colTitle:not(:containsIN('" + tukhoa + "'))")
						.parent().hide();
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