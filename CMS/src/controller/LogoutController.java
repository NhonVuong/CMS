package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/views/Logout")
public class LogoutController extends HttpServlet{
  @Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	  HttpSession  session = req.getSession();
//	String remember=  (String) session.getAttribute("remember");
//	  if(remember==null||!remember.equals("true"))
//	  {
//		  session.invalidate();
//		  resp.sendRedirect("../Login.jsp");
//		  return;
//	  }
	  session.invalidate();
//	  session.removeAttribute("login");
//	  session.removeAttribute("remember");
	  resp.sendRedirect("../Login.jsp");
	  return;
}
  @Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(req, resp);
	}
}
