package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.ModelContent;
import model.ModelMember;
import object.Content;
import object.Member;

/**
 * Servlet implementation class MemberController
 */
@WebServlet("/views/MemberController")
public class MemberController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Member c = new Member();
		boolean rs,rsc;
		ModelMember model = new ModelMember();
		ModelContent modelContent=new ModelContent();
		String dataButton = request.getParameter(("dataButton"));
		String id = request.getParameter(("id"));
		String firstname = request.getParameter(("firstname"));
		String lastname = request.getParameter(("lastname"));
		String email = request.getParameter(("email"));
		String phone = request.getParameter(("phone"));
		String des = request.getParameter(("des"));
		String user = request.getParameter(("user"));
		String pass = request.getParameter(("pass"));
		int idMember = Integer.parseInt(id);
		PrintWriter out = response.getWriter();
		try {
			if (dataButton.equals("update")) {

				c.setUsername(user);
				c.setFirstname(firstname);;
				c.setLastname(lastname);
				c.setEmail(email);
				c.setPhone(phone);
				c.setDescription(des);
				if(!pass.equals(""))
				{
					c.setPassword(pass);
					rs = model.updateMemberAdminPass(c, idMember);
				}
				else
				{
					rs = model.updateMemberAdmin(c, idMember);
				}
				
				if (rs) {
					System.out.println("success");
					out.print("success");
				} else {
					System.out.println("fail");
					out.print("fail");
				}
			} 
			else if (dataButton.equals("delete")) {
				rsc=modelContent.deleteContentMember(idMember);
				if(!rsc) {
					out.print("error content member");
				}
				else {
					rs = model.deleteMember(idMember);
					if (rs) {
						System.out.println("success");
						out.print("success");
					} else {
						System.out.println("fail");
						out.print("fail");
					}
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
