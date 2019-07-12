<%@page import="object.Member"%>
<%@page import="model.ModelMember"%>
<%@page import="model.ModelContent"%>
<%@page import="object.Content"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%-- <%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%> --%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<div id="vc">
	<div class="view__content">
		<h1>View Content</h1>
		<span>
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
				<p>View Content List</p>
			</div>
			<div class=table-content>
				<table class="table table-bordered table-striped" role="table">
					<thead role="rowgroup">
						<tr role="row">
							<th role="columnheader" scope="col" style="width: 60px">#</th>
							<th role="columnheader" scope="col">Title</th>
							<th role="columnheader" scope="col">Brief</th>
							<th role="columnheader" scope="col" style="width: 125px">Created
								Date</th>
							<th role="columnheader" scope="col" class="button-submit"></th>
						</tr>
					</thead>
					<tbody role="rowgroup">
						<%
							ModelContent model = new ModelContent();
							ModelMember modelmem = new ModelMember();
							Member mem = modelmem.getUser((String) session.getAttribute("email"));
							int stt = 1;

							for (Content c : model.getListContent(mem.getId())) {
						%>
						<tr role="row" class="rows">
							<td role="cell"><%=stt++%></td>
							<td role="cell" class="colTitle"><%=c.getTitle()%></td>
							<td role="cell"><%=c.getBrief()%></td>
							<td role="cell" class="date"><%=c.getCreatedDate()%></td>
							<td role="cell"><input name="" id="edit"
								class="btn btn-success btnEdit" type="button" value="Update"
								data-toggle="modal" data-target="#editModal"
								data-title="<%=c.getTitle()%>" data-brief="<%=c.getBrief()%>"
								data-id="<%=c.getId()%>" data-content="<%=c.getContent()%>"/> <input name="" id=""
								class="btn btn-success btnDelete" type="button" value="Delete"
								data-toggle="modal" data-target="#deleteModal"
								data-id="<%=c.getId()%>" /></td>
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
<div class="modal" tabindex="-1" id="editModal">
	<div class="modal-dialog" role="document">
		<div class="modal-content modal-update">
		<div class="modal-header">
          <h3 class="modal-title">Update Content</h3>
          <button type="button" class="close" style="left: 93%; top: 0" data-dismiss="modal">&times;</button>
        </div>
		<form onkeydown="return event.key != 'Enter';">
			<!-- <h1>Edit Content</h1> -->

			<!-- <span class="close" data-dismiss="modal">&times;</span> -->
			<div id="contentTitle">
				<p>Title</p>
				<input type="text" name="title" id="title" placeholder=""
					class="input title" /> <span class="sp-thongbao" id="tb-title"
					autofocus="autofocus"></span>
				<p>Brief</p>
				<textarea name="brief" id="brief" cols="30" rows="10" class="brief"></textarea>
				<span class="id-update sp-thongbao" style="display: none;"
					id="id-update"></span>
				<p>Content</p>
				<textarea name="content" id="content-view" cols="30" rows="5" class="content"></textarea>
				<span class="id-updateContent sp-thongbao" style="display: none;"
					id="id-updateContent"></span>
			</div>
			<div class="modal-footer" style="margin-right: 50%;padding: 1rem 0;">
				<button type="button" class="btn btn-success update"
					data-button="update" style="width: 68%;" id="btnUpdate">Submit Button</button>
				
					<button type="button" class="btn btn-success " id="btnReset"
					style="width: 74%;">Reset Button</button>
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
	          	<button type="button" class="close" style="left: 93%; top:0" data-dismiss="modal">&times;</button>
				<!-- <h3 class="modal-title" style="background-color: white;">Do You
					Want To Delete?</h3>
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close" >
					<span aria-hidden="true">&times;</span>
				</button> -->
				<span class="id-delete" style="display: none;" id="id-delete"></span>
			</div>
			 <div class="modal-body">
		          <h4>Do You Want To Delete?</h4>
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
<script src="../js/viewContent.js">
	
</script>
</html>