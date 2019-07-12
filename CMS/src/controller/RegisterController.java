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

import model.Base64Hash;

import model.ModelMember;
import model.SendMail;
import object.Member;

@WebServlet("/views/Register")
public class RegisterController extends HttpServlet {
	ModelMember model;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		model = new ModelMember();
		PrintWriter out = resp.getWriter();
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		HttpSession session = req.getSession();
		String email = req.getParameter("email");
		String username = req.getParameter("username");
		String pass = req.getParameter("pass");
		String checkRole = req.getParameter("check");
		if (checkRole != null && checkRole.equals("newpass")) {
			String key = (String) session.getAttribute("keyF");
			
			model.updateNewPass(key, pass);
			email= model.getEmailbyForgotkey(key);
			Cookie cookie = new Cookie("u", email);
			cookie.setPath("/CMS");//must set path 
			resp.addCookie(cookie);
			Cookie cookie1 = new Cookie("p", null);
			cookie1.setPath("/CMS");
      		cookie1.setMaxAge(0);
			resp.addCookie(cookie1);
		}
		else if (checkRole != null && checkRole.equals("mail")) {
			if (model.checkExistEmail(email)) {
				out.print("false");
				return;
			}
		} else if (checkRole != null && checkRole.equals("username")) {
			if (model.checkExistUsername(username)) {
				out.print("false");
				return;
			}

		} else {
			Member member = new Member();
			Base64Hash b64Hash = new Base64Hash();
			try {
				member.setPassword(b64Hash.encodeBase64(pass));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				out.print("fail");
				return;
			}
			member.setEmail(email);
			member.setUsername(username);

			// set the expiration time
			// 1 hour = 60 seconds x 60 minutes

			// add the cookie to the response

//			 String password= (String) session.getAttribute("pass");
//			 if(password!=null)
//			 {
//				 session.removeAttribute("pass");
//			 }
			// session.invalidate();
			// session = req.getSession();
			// session.setAttribute("email", email);
			Cookie cookie = new Cookie("u", email);
			cookie.setPath("/CMS");//must set path 
			resp.addCookie(cookie);
			Cookie cookie1 = new Cookie("p", null);
			cookie1.setPath("/CMS");
      		cookie1.setMaxAge(0);
			resp.addCookie(cookie1);
			
			String key=model.insertMember(member);
			SendMail.send(member.getEmail(), "Activation Member","http://localhost:8088/CMS/views/Active?key="+key);
			return;
			// resp.sendRedirect("../Login.jsp");

		}
		out.print("success");
		return;

//		if(model.checkExistUsername(username))
//		{
//			req.setAttribute("usedUsername", "Username was used");			
//			  RequestDispatcher rd =   req.getRequestDispatcher("Register.jsp");
//			          rd.forward(req, resp);
//		}
//		else if (model.checkExistEmail(email)) {
//			req.setAttribute("usedEmail", "Email was used");
//			
//			  RequestDispatcher rd =   req.getRequestDispatcher("Register.jsp");
//			          rd.forward(req, resp);
//			//resp.sendRedirect("views/Register.jsp");
//		} else {
//			Member member = new Member();
//			MD5Hash md5Hash = new MD5Hash();
//			try {
//				member.setPassword(md5Hash.encode(pass));
//			} catch (Exception e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//			member.setEmail(email);
//			member.setUsername(username);
//			 session.setAttribute("email", email);
//			 model.insertMember(member);
//			resp.sendRedirect("../Login.jsp");
//		}

	}
}
