package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.ModelMember;
import object.Member;
@WebServlet("/views/EditProfile")
public class EditProfileController extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub		
		// đang set cứng email!!!!
		
		HttpSession session = req.getSession();
		String email = (String) session.getAttribute("email");
		String check="" ;
				check= (String) req.getParameter("check");
		ModelMember model = new ModelMember();
		PrintWriter out = resp.getWriter();
		if (check != "" && check.equals("checkPass")) { 
			String pass = req.getParameter("pass");
			if (!model.checkLogin(email, pass)) {
				out.print("false");				
			}
			else {
				out.print("success");				
			}
			return;
		}
		
		if (check != "" && check.equals("checkPassSuccess")) { 
			String pass = req.getParameter("pass");
			if (!model.setPass(email, pass)) {
				out.print("false");				
			}
			else {
				out.print("success");	
				Cookie cookie1 = new Cookie("p",null);
				
				cookie1.setMaxAge(0);
				resp.addCookie(cookie1);
				Cookie cookie2 = new Cookie("u",email);
				
				
				resp.addCookie(cookie2);
			}
			return;
		}
		
		try {
			Member member = model.getUser(email);
			member.setFirstname(req.getParameter("firstName"));
			member.setLastname(req.getParameter("lastName"));
			member.setDescription(req.getParameter("description"));
			member.setPhone(req.getParameter("phone"));	
			model.updateMember(member, member.getId());
			out.print("success");
			return;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			out.print("fail");
			return;
		}
		
	}
}
