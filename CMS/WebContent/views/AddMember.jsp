<%@page import="object.Member"%>
<%@page import="model.ModelMember"%>
<%@page import="model.ModelContent"%>
<%@page import="object.Content"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%-- <%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%> --%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />	
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css">
<div id="vc">
	<div class="view__content">
		<%
		ModelMember model1 = new ModelMember();
		int count=model1.countMember();	
		%>
		<span id="count" style="display:none;"><%= count %></span>
		<h1>Members</h1>
		<!-- <button class="btn btn-success">Add Member</button> -->
		<span> <!-- <button class="btn btn-success add-member">Add Member</button> -->
			<div class="input-group mb-3 input_group">
				<input type="text" class="form-control form_control"
					id="input-search" placeholder="Search..."
					aria-label="Recipient's username" aria-describedby="button-addon2">
				<div class="input-group-append">
					<button class="btn btn-outline-secondary btnSearch" id="btnSearch"
						type="button" id="button-addon2">
						<i class="fa fa-search"></i>
					</button>
				</div>
			</div>
		</span>
		<hr />
		<div class="detail">
			<div class="title">
				<p>View Member</p>
			</div>
			<div class=table-content>
				<table class="table table-bordered table-striped" role="table" id="mytable">
					<thead role="rowgroup">
						<tr role="row">
							<th role="columnheader" scope="col" style="width: 60px">id</th>
							<th role="columnheader" scope="col" style="width: 20%;">Username</th>
							<th role="columnheader" scope="col" style="width: 35%;">Email</th>
							<th role="columnheader" scope="col">Phone</th>							
						</tr>
					</thead>
					<tbody role="rowgroup">
						 <%
							ModelMember model = new ModelMember();
							int stt = 1;
							for (Member c : model.getListMember()) {
						 %>
						<tr role="row" class="rows">
							<td role="cell" class="colTitle"><%=c.getId()%></td>
							<td role="cell" class="col-username"><%=c.getUsername()%></td>
							<td role="cell" class="col-email"><%=c.getEmail()%></td> 
							<td role="cell" class="col-phone"><%=c.getPhone()%></td>
							<td role="cell"><input name="" id="edit"
								class="btn btn-success btnEdit" type="button" value="Edit"
								data-toggle="modal" data-target="#editModal" data-user="<%=c.getUsername()%>" data-email="<%=c.getEmail()%>"
								data-id="<%=c.getId()%>" data-pass="<%=c.getPassword()%>" data-phone="<%=c.getPhone()%>" data-firtname=<%=c.getFirstname() %> data-lastname=<%= c.getLastname()%> data-des=<%= c.getDescription() %>/>
								<input name="" id="" class="btn btn-success btnDelete"
								type="button" value="Delete" data-toggle="modal"
								data-target="#deleteModal" data-id="<%=c.getId()%>" data-username="<%=c.getUsername()%>"/></td>
						</tr>
						 <%
							}
						%> 
					</tbody>
				</table>
			</div>

		</div>
	</div>

</div>
<div class="pagi">
	<ul id="pagination" class="justify-content-center">
<!-- 		<li class="page-item"><a class="page-link" href="#">Previous</a></li>
		<li class="page-item"><a class="page-link" href="#">1</a></li>
		<li class="page-item"><a class="page-link" href="#">2</a></li>
		<li class="page-item"><a class="page-link" href="#">3</a></li>
		<li class="page-item"><a class="page-link" href="#">Next</a></li> -->
	</ul>
</div>
<div class="modal" tabindex="-1" id="editModal">
	<div class="modal-dialog" role="document">
		<div class="modal-content modal-update">
			<div class="modal-header">
				<h3 class="modal-title">Edit Member</h3>
				<button type="button" class="close" style="left: 93%; top: 0"
					data-dismiss="modal">&times;</button>
			</div>
			<form onkeydown="return event.key != 'Enter';">
				<!-- <h1>Edit Content</h1> -->

				<!-- <span class="close" data-dismiss="modal">&times;</span> -->
				<div id="contentTitle">
					<!-- <p>Title</p>
					<input type="text" name="title" id="title" placeholder=""
						class="input title" /> <span class="sp-thongbao" id="tb-title"
						autofocus="autofocus"></span>
					<p>Brief</p>
					<textarea name="brief" id="brief" cols="30" rows="10" class="brief"></textarea>
					<span class="id-update sp-thongbao" style="display: none;"
						id="id-update"></span>
					<p>Content</p>
					<textarea name="content" id="content-view" cols="30" rows="5"
						class="content"></textarea>
					<span class="id-updateContent sp-thongbao" style="display: none;"
						id="id-updateContent"></span> -->
					<div class="modal-body">
						 <label for="firstname">Firstname</label> <input type="text"
							name="firstname" id="firstname" placeholder="" class="firstname" />
						<span class="sp-thongbao" id="tb-firstname"></span> <label
							for="lastname">Lastname</label> <input type="text"
							name="lastname" id="lastname" placeholder="" class="lastname" />
						<span class="sp-thongbao" id="tb-lastname"></span>
						<label for="username">Username</label> <input type="text"
							name="username" id="username" placeholder="" class="username" />
						<span class="sp-thongbao" id="tb-username"></span> <label
							for="email">Email</label> <input type="text" name="email" readonly style="border:none;"
							id="email" placeholder="" class="email" /> <span
							class="sp-thongbao" id="tb-email"></span> <label for="phone">Phone</label>
						<input type="text" name="phone" id="phone" placeholder=""
							class="phone" /> <span class="sp-thongbao" id="tb-phone"></span>
						<span class="id-update" style="display: none;"
						id="id-update"></span>
						<label for="pass">Password</label> 
						<input type="password" class="pass" id="pass"placeholder=""
				class="input" /> <span
				class="sp-thongbao" id="tb-pass"></span>
						 <label for="descrip">Description</label> <input type="text"
							name="descrip" id="descrip" placeholder="" class="descrip"/> <span
							class="sp-thongbao" id="tb-descrip"></span>
					</div>
					<hr>
					<div class="modal-footer"
						style="margin: 0 42% 0 3%; padding: 1rem 0; border-top: none;">
						<button type="button" class="btn btn-success update"
							data-button="update" style="width: 68%;" id="btnUpdate">Submit
							Button</button>

						<button type="button" class="btn btn-success " id="btnReset"
							style="width: 74%;">Reset Button</button>
					</div>
				</div>

			</form>
		</div>
	</div>

</div>
<div class="modal" tabindex="-1" role="dialog" id="deleteModal"
	style="margin-top: 10%;">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title">Delete Content</h3>
				<button type="button" class="close" style="left: 93%; top: 0"
					data-dismiss="modal">&times;</button>
				<!-- <h3 class="modal-title" style="background-color: white;">Do You
					Want To Delete?</h3>
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close" >
					<span aria-hidden="true">&times;</span>
				</button> -->
				<span class="id-delete" style="display: none;" id="id-delete"></span>
			</div>
			<div class="modal-body">
				<h4 class="tb-delete">Do You Want To Delete?</h4>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-success delete"
					data-dismiss="modal" data-button="delete" id="ok"
					style="width: 60px;">Yes</button>
				<button type="button" class="btn btn-success " data-dismiss="modal"
					style="width: 60px;" autofocus="autofocus">No</button>
			</div>
		</div>
	</div>
</div>

 <script type="text/javascript">
            $(function () {
                var pageSize = 6; // Hiển thị 6 nội dung trên 1 trang
                showPage = function (page) {
                    $(".rows").hide();
                    $(".rows").each(function (n) {
                        if (n >= pageSize * (page - 1) && n < pageSize * page)
                            $(this).show();
                    });
                }
                showPage(1);
                ///** Cần truyền giá trị vào đây **///
             /*    $(".count").val() */
                var totalRows =$('#count').text(); // Tổng số sản phẩm hiển thị
                var btnPage = 3; // Số nút bấm hiển thị di chuyển trang
                var iTotalPages = Math.ceil(totalRows / pageSize);
                console.log(iTotalPages);
                 var obj = $('#pagination').twbsPagination({
                    totalPages: iTotalPages,	
                    visiblePages: btnPage,
                    onPageClick: function (event, page) {
                        console.info(page);
                        showPage(page);
                    }
                });
                console.info(obj.data());  
            });
        </script>
<script type="text/javascript" src="../js/jquery.twbsPagination.js"></script>
<script src="../js/addMember.js">
	
</script>
</html>