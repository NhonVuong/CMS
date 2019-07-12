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
import object.Content;


@WebServlet("/views/ViewContent")
public class ViewContentController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ViewContentController() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		Content c = new Content();
		boolean rs;
		ModelContent model = new ModelContent();
		String dataButton = request.getParameter(("dataButton"));
		String id = request.getParameter(("id"));
		String title = request.getParameter(("title"));
		String brief = request.getParameter(("brief"));
		int idContent = Integer.parseInt(id);
		String content=request.getParameter("content");
		PrintWriter out = response.getWriter();
		try {
			if (dataButton.equals("update")) {

				c.setTitle(title);
				c.setBrief(brief);
				c.setId(idContent);
				c.setContent(content);
				rs = model.editContent(c);
				if (rs) {
					System.out.println("success");
					out.print("success");
				} else {
					System.out.println("fail");
					out.print("fail");
				}
			} else if (dataButton.equals("delete")) {
				rs = model.deleteContent(idContent);
				if (rs) {
					System.out.println("success");
					out.print("success");
				} else {
					System.out.println("fail");
					out.print("fail");
				}
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}