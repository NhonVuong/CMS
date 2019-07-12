package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.mysql.cj.Session;

import model.Base64Hash;
import model.ModelMember;
@WebServlet("/views/Forgot")
public class ForgotController extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		email.
		
		PrintWriter out =resp.getWriter();
		HttpSession session =  req.getSession();
		ModelMember modelMember = new ModelMember();
		String key = "";
		key = req.getParameter("key").toString();
		String mess = modelMember.checkForgotKey(key);
		if(mess.equals("success"))
		{
			resp.sendRedirect("ForgotPage.jsp");
			session.setAttribute("keyF", key);
			return;
		}
		out.print(mess);
		
		return;
	}
}
