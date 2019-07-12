package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.ModelMember;

@WebServlet("/views/Active")
public class ActiveController extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String key = "";
		key = req.getParameter("key");
		ModelMember modelMember = new ModelMember();
		String email = modelMember.checkActive(key);
		PrintWriter out =resp.getWriter();
		if (email.contains("@")) { //active success
			Cookie cookie = new Cookie("u", email);
			resp.addCookie(cookie);
			cookie = new Cookie("p", null);
			cookie.setMaxAge(0);
			resp.addCookie(cookie);
			resp.sendRedirect("../Login.jsp");
			return;
		}
	//	out.print("Account has been already actived!");
		out.print(email);
		return;
	}

}
