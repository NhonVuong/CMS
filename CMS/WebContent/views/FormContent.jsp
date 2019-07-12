<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta charset="UTF-8">
</head>
<body>

	<div class="add" id="add">
		<h1>Add Content</h1>
		<hr />
		<div class="detail">
			<div class="title">
				<p>Content Form Elements</p>
			</div>
			<form action="" onkeydown="return event.key != 'Enter';">
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
				
			</form>
		</div>
	</div>
	 <div class="modal" id="editModal" tabindex="-1" role="dialog">
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
  
        <button type="button" class="btn btn-success" data-dismiss="modal" id="btnOK"autofocus="autofocus">OK</button>
      </div>
    </div>
  </div>
</div>
	<script src="../js/formContent.js"></script>
</body>
</html>