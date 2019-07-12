<%@page import="model.ModelMember"%>
<%@page import="model.ModelContent"%>
<%@page import="object.Member"%>
<%@page import="object.Content"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta charset="UTF-8">
</head>
<body>

	<div class="add view__content" id="add">
	<% 
	ModelContent model1 = new ModelContent();
	int count=model1.countPost();
	%>
		<span id="count" style="display:none;"><%= count %></span>
		<h1>Content</h1>
		<span>
		
			<button class="btn btn-success add-member" id="btnadd"data-target="#addModal"
				data-toggle="modal">Add Post</button>
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
				<p>Content Form Elements</p>
			</div>
			<!-- <form action="" onkeydown="return event.key != 'Enter';">
				<p>Title</p>
				<input type="text"  id="title" placeholder="Enter the title"
					class="input" />
					<span class="sp-thongbao" id="tb-title"></span>
				<p>Brief</p>
				<textarea  cols="30" rows="10" class="brief" id="brief"></textarea>
				<span class="sp-thongbao" id="tb-brief"></span>
				<p>Content</p>
				<textarea   cols="30" rows="10" id="contentEdit"></textarea>
				<span class="sp-thongbao" id="tb-descrip"></span>
				<div class="button-form">
					<input type="button" value="Submit button" id="btnSubmit" style="color:white;" /> 
					<input type="button" value="Reset button" id="btnReset" style="color:white;"/>
				</div>
				<span class="sp-thongbao" id="tb-submit"></span>
				
			</form> -->
			<div class=table-content>
				<table class="table table-bordered table-striped" role="table">
					<thead role="rowgroup">
						<tr role="row" class="">
							<th role="columnheader" scope="col" style="width: 4%">id</th>
							<th role="columnheader" scope="col" style="width: 13%">Title</th>
							<th role="columnheader" scope="col">Brief</th>
							<th role="columnheader" scope="col">Content</th>
							<th role="columnheader" scope="col" style="width: 19%;">#</th>
							<!-- <th role="columnheader" scope="col" style="width: 125px">Created
								Date</th> -->
							<!-- <th role="columnheader" scope="col" class="button-submit"></th> -->
						</tr>
					</thead>
					<tbody role="rowgroup">

						<%
							ModelContent model = new ModelContent();
							/* ModelMember modelmem = new ModelMember();
							Member mem = modelmem.getUser((String) session.getAttribute("email")); */

							for (Content c : model.getListContents()) {
						%>
						<tr role="row" class="rows">
							<td style="width:4%;" ><%=c.getId()%></td>
							<td style="width:13%;" class="colTitle"><%=c.getTitle()%></td>
							<td><%=c.getBrief()%></td>
							<td><%=c.getContent()%></td>
							<td style="width:15%;" role="cell"><input name="" id="btnEdit"
								class="btn btn-success btnEdit" type="button" value="Edit"
								data-toggle="modal" data-target="#editModal" data-username="<%=c.getUsername()%>"
								data-title="<%=c.getTitle()%>" data-brief="<%=c.getBrief()%>"
								data-id="<%=c.getId()%>" data-content="<%=c.getContent()%>" />
								<input name="" id="" class="btn btn-success btnDelete"
								type="button" value="Delete" data-toggle="modal"
								data-target="#deleteModal" data-id="<%=c.getId()%>" data-title="<%=c.getTitle()%>"/></td>
						</tr>
						<div class="modal" tabindex="-1" role="dialog" id="deleteModal"
							style="margin-top: 10%;">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h3 class="modal-title">Delete Content</h3>
										<button type="button" class="close" style="left: 93%; top: 0"
											data-dismiss="modal">&times;</button>
										<span class="id-delete" style="display: none;" id="id-delete"></span>
									</div>
									<div class="modal-body">
										<h4 class="text"></h4>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-success delete"
											data-dismiss="modal" data-button="delete" id="ok"
											style="width: 60px;">Yes</button>
										<button type="button" class="btn btn-success "
											data-dismiss="modal" style="width: 60px;"
											autofocus="autofocus">No</button>
									</div>
								</div>
							</div>
						</div>
						<%
							}
						%>
					</tbody>
				</table>
			</div>
		</div>
		<div class="pagi">
			<ul class="justify-content-center" id="pagination">
				
			</ul>
		</div>

	</div>
	<div class="modal" id="addModal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-center" role="document">
			<div class="modal-content" style="margin-top: -30%">
				<div class="modal-header">
					<h3 class="modal-title">Add Content</h3>
					<button type="button" class="close" style="left: 93%; top: 0"
						data-dismiss="modal">&times;</button>
				</div>
				<div class="modal-body">
				
					<label for="title-add">Title</label> <input type="text"
						name="title-add" id="title-add" placeholder="" class="title-add" />
					<span class="sp-thongbao" id="tb-title-add"></span> 
					<label for="brief-add">Brief</label> 
					<textarea type="text" name="brief-add" id="brief-add" placeholder="" class="brief-add"
					cols="30" rows="5" style="width: 100%;"></textarea> 
					<span class="sp-thongbao" id="tb-brief-add"></span> 
					<label for="content-add">Content</label>
					<textarea type="text" name="content-add" id="content-add"
						placeholder="" cols="30" rows="5" class="content-add"
						style="width: 100%;"></textarea>
					<span class="sp-thongbao" id="tb-content-add"></span>
				</div>
				<hr>
				<div class="modal-footer"
					style="margin: 0 3% 0 3%; padding: 1rem 0; border-top: none;">
					<button type="button" class="btn btn-success btnAdd"
						data-button="add" style="width: 20%;" id="btnAdd">Add</button>
					<button type="reset" class="btn btn-success btnAdd"
						data-button="reset" style="width: 20%;" id="btnResetTrang">Reset</button>
					<!-- <button type="button" class="btn btn-success " id="btnReset"
							style="width: 74%;">Reset Button</button> -->
				</div>
			</div>
		</div>
	</div>

	<div class="modal" id="editModal" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-center" role="document">
			<div class="modal-content" style="margin-top: -30%">
				<div class="modal-header">
					<h3 class="modal-title">Edit Content</h3>
					<button type="button" class="close" style="left: 93%; top: 0"
						data-dismiss="modal">&times;</button>
				</div>
				<div class="modal-body">
				<label for="title-add">Username</label>
				<p class="username"></p>
					<label for="title-edit">Title</label> <input type="text"
						name="title" id="title-edit" placeholder="" class="title-edit" />
					<span class="sp-thongbao" id="tb-title"></span> <label
						for="brief-edit">Brief</label>
					<textarea type="text" name="brief-content" id="brief-edit"
						placeholder="" cols="30" rows="5" class="brief-edit"
						style="width: 100%;"></textarea>
					<span class="id-update sp-thongbao" style="display: none;"
						id="tb-brief"></span> <label for="content-edit">Content</label>
					<textarea type="text" name="content" id="content-edit"
						placeholder="" cols="30" rows="5" class="content-edit"
						style="width: 100%;"></textarea>
					<span class="sp-thongbao" id="tb-content"></span>
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
		</div>
	</div>

	<div class="modal" id="addContent" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-center" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Add Content</h3>
                        <button type="button" class="close" style="left: 93%; top: 0" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <h3>Add content success!</h3>
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-success" data-dismiss="modal" id="btnOK" autofocus="autofocus">OK</button>
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
                        /* console.info(page); */
                        showPage(page);
                    }
                });
                console.info(obj.data());  
            });
        </script>
	<script src="../js/contentAdmin.js"></script>
	<script src="../js/jquery.twbsPagination.js"></script>
</body>
</html>