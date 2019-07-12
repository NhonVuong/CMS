package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.sql.SQLException;

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
import object.Content;
import object.Member;

@WebServlet("/Login")
public class LoginController extends HttpServlet {
	ModelMember model;

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		model = new ModelMember();
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		HttpSession session = req.getSession();
		String email = req.getParameter("email");
		String pass = req.getParameter("pass");
		String remember = req.getParameter("remember");
		String checkRole=req.getParameter("check");
		PrintWriter out = resp.getWriter();
		Base64Hash base64Hash = new Base64Hash();
		if(checkRole!=null&&checkRole.equals("forgot"))
		{
			
			String key = base64Hash.encodeBase64(email+"."+SendMail.getRandomNumberString());
			out.print("success");
			SendMail.send(email, "Link forget pass", "http://localhost:8088/CMS/views/Forgot?key="+key);
			model.saveKeyForgotPass(email, key);
			return;
			//resp.sendRedirect("views/ForgotPage.jsp");
		}
		else if(checkRole!=null&&checkRole.equals("login"))
		{
			if (!model.checkLogin(email, pass)) {
				out.print("false");
				return;
			}
			else {//login success
				if(!model.checkActivate(email))
				{
					out.print("notActivated");
					return;
				}
				if(remember!= null&&remember.equals("remember"))
				{
					session.setAttribute("pass", pass);
					 session.setAttribute("remember","true");
					 
						try {
							Cookie cookie1 = new Cookie("p", base64Hash.encodeBase64(pass));
							
							resp.addCookie(cookie1);
							Cookie cookie2 = new Cookie("u", email);
							
							resp.addCookie(cookie2);
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
							
				}
				else if(!remember.equals("remember")){
					Cookie cookie1 = new Cookie("p",null);
					
					cookie1.setMaxAge(0);
					resp.addCookie(cookie1);
					Cookie cookie2 = new Cookie("u",null);
					
					cookie2.setMaxAge(0);
					resp.addCookie(cookie2);
//			        Cookie[] cookies = req.getCookies();
//			        if (cookies != null) { // Yes, this can return null! The for loop would otherwise throw NPE.
//			            for (Cookie cookie : cookies) {
//			                if (cookie.getName().equals("p")) {
//			                    cookie.setMaxAge(0);
//			                    resp.addCookie(cookie);
//			                   
//			                }
//			                else if (cookie.getName().equals("u")) {
//			                    cookie.setMaxAge(0);
//			                    resp.addCookie(cookie);
//			                    
//			                }
//			            }
//			        }
				}
				ModelMember model = new ModelMember();
				Member mem = new Member();
				try {
					mem=model.getUser(email);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				session.setAttribute("login","true");
				 session.setAttribute("email", email);
				 if(mem.getRole()==1)
					{
					 out.print("successAdmin");
					 session.setAttribute("role", "1");
					 return;
					}
				 out.print("success");

		          //resp.sendRedirect("views/MainPage.jsp");
		          return;
			}
		}
		/*
		 * else { if(remember!= null) { session.setAttribute("pass", pass);
		 * session.setAttribute("remember","true"); }
		 * session.setAttribute("login","true"); session.setAttribute("email", email);
		 * out.print("true");
		 * 
		 * resp.sendRedirect("views/MainPage.jsp"); return; } out.print("success");
		 * return;
		 */
		
		
		
//		else {
//			req.setAttribute("errormsg", "(*)Email or password is wrong");
//			//rd ben jsp moi nhan dc atr
//			  RequestDispatcher rd =   req.getRequestDispatcher("Login.jsp");
//			          rd.forward(req, resp);
//			//resp.sendRedirect("Login.jsp");
//		}

	}
	
}
