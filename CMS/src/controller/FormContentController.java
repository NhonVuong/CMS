package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.ModelContent;
import model.ModelMember;
import object.Content;
import object.Member;


@WebServlet("/views/FormContent")
public class FormContentController extends HttpServlet{
	ModelContent model;
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
	//	super.doPost(req, resp);
		HttpSession session = req.getSession();
		String email=  (String) session.getAttribute("email");
		ModelMember modelMem = new  ModelMember();
		Member mem = new Member();
		try {
			mem = modelMem.getUser(email);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		model = new ModelContent();
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		Content content = new Content();
		content.setAuthorId(mem.getId());
		content.setBrief(req.getParameter("brief").trim());
		content.setTitle(req.getParameter("title").trim());
		content.setDescription("");
		content.setContent(req.getParameter("content").trim());
		PrintWriter out = resp.getWriter();
		model.addContent(content);
		  out.print("true");
	}
	
}
