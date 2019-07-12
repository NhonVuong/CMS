package model;

import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import object.Content;


//import com.mysql.cj.importxdevapi.PreparableStatement;

public class ModelContent {
	public List<Content> getListContents() throws SQLException{
		Connection connection =DBConnect.getConnection();
		List<Content>list = new ArrayList<Content>();
		String sql="Select * from cms.content,cms.member where authorId=member.id";
		PreparedStatement ps= connection.prepareStatement(sql);
		ResultSet resultSet =ps.executeQuery();
		while(resultSet.next()) {
			object.Content content = new object.Content();
			content.setAuthorId(resultSet.getInt("authorId")); 
			content.setBrief(resultSet.getString("brief"));
			content.setContent(resultSet.getString("content"));
			content.setId(resultSet.getInt("id"));
			content.setTitle(resultSet.getString("title"));
			content.setUsername(resultSet.getString("username"));
			String dt = resultSet.getString("createdDate");
			java.text.SimpleDateFormat df = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm");
			Date date = new Date();
			try {
				 date = (Date)df.parse(dt);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			String currentTime = sdf.format(date);
			content.setCreatedDate(currentTime);
			
			String ut = resultSet.getString("createdDate");
			java.text.SimpleDateFormat dff = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			java.text.SimpleDateFormat sdff = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm");
			Date udate = new Date();
			try {
				 date = (Date)df.parse(dt);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			String updateTime = sdff.format(date);
			content.setUpdateTime(updateTime);
			
			
			list.add(content);
			
		}
		return list;	
	}
	public List<Content> getListContent(int authorId) throws SQLException
	{
		Connection connection =DBConnect.getConnection();
		List<Content>list = new ArrayList<Content>();
		String sql="Select * from content where authorId="+authorId;
		PreparedStatement ps= connection.prepareStatement(sql);
		ResultSet resultSet =ps.executeQuery();
		while(resultSet.next())
		{
			object.Content content = new object.Content();
			content.setAuthorId(resultSet.getInt("authorId"));
			content.setBrief(resultSet.getString("brief"));
			content.setContent(resultSet.getString("content"));
			
			String dt = resultSet.getString("createdDate");
			java.text.SimpleDateFormat df = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm");
			Date date = new Date();
			try {
				 date = (Date)df.parse(dt);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			String currentTime = sdf.format(date);
			
			content.setCreatedDate(currentTime);
			content.setUpdateTime(resultSet.getString("updateTime"));
			content.setId(resultSet.getInt("id"));
			content.setTitle(resultSet.getString("title"));
			list.add(content);
			}
		return list;
	}
	public boolean deleteContentMember(int authorId) throws SQLException
	{
		Connection connection =DBConnect.getConnection();
		String sql = "delete from content where authorId=?";
		PreparedStatement ps= connection.prepareStatement(sql);
		ps.setInt(1,authorId);
		ps.executeUpdate();
		return true;
	}
	public boolean editContent(object.Content content) throws SQLException
	{
		Connection connection =DBConnect.getConnection();
		String sql="Update content set   brief=?,title=? ,content=?,updateTime=? where id=?";
		PreparedStatement ps= connection.prepareStatement(sql);
		ps.setString(1,content.getBrief() );
		ps.setString(2,content.getTitle() );
		ps.setString(3,content.getContent());
		
		java.util.Date dt = new java.util.Date();
		java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String currentTime = sdf.format(dt);
		
	//	java.util.Date uDate = new java.util.Date();
		//java.sql.Date sDate = convertUtilToSql( uDate);
		ps.setString(4, currentTime);
		ps.setInt(5,content.getId());
		ps.executeUpdate();
		return true;
	}
	public int countPost() {
		  Connection connect = DBConnect.getConnection();
	        try {
	            String sql = "SELECT count(id) FROM content";
	            PreparedStatement ps = connect.prepareCall(sql);
	            ResultSet rs = ps.executeQuery();
	            while (rs.next()) {
	                return rs.getInt(1);
	            }
	        } catch (Exception ex) {
	        	ex.printStackTrace();
	        }
	        return -1;

	}
	private Date convertUtilToSql(java.util.Date uDate) {
		// TODO Auto-generated method stub
		java.sql.Date sDate = new java.sql.Date(uDate.getTime());
        return sDate;	
	}
	public boolean deleteContent(int id) throws SQLException
	{
		Connection connection =DBConnect.getConnection();
		String sql = "delete from content where id=?";
		PreparedStatement ps= connection.prepareStatement(sql);
		ps.setInt(1,id);
		ps.executeUpdate();
		return true;
	}
	public boolean addContent(Content content) {
		Connection connection = DBConnect.getConnection();
		try {
			PreparedStatement ps = connection.prepareStatement("INSERT INTO content(title, brief, content, createdDate, updateTime, authorId) VALUES (?, ?, ?, ?, ?, ?)");
			ps.setString(1, content.getTitle());
			ps.setString(2, content.getBrief());
			ps.setString(3, content.getContent());
			java.util.Date dt = new java.util.Date();
			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String currentTime = sdf.format(dt);
			ps.setString(4, currentTime);
			ps.setString(5, currentTime);
			ps.setInt(6, content.getAuthorId());
			ps.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		return true;
		
	}
	public ArrayList<Content> getListcontentByTitle(String keyword) throws SQLException {
        Connection conect = DBConnect.getConnection();
        String sql = "SELECT * FROM content WHERE  title LIKE'%" + keyword + "%'";
        PreparedStatement ps = conect.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        ArrayList<Content> list = new ArrayList<>();
        while (rs.next()) {
        	Content content = new Content();
            content.setTitle(rs.getString("title"));
            content.setBrief(rs.getString("brief"));
            content.setContent(rs.getString("content"));
            content.setCreatedDate(rs.getString("createdDate"));;
            list.add(content);
        }
        return list;
    }

//	public static void main(String[] args) {
//		List<Content>list= new ArrayList<Content>();
//		ModelContent model = new ModelContent();
//		try {
//			list = model.getListContent();
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		System.out.println(list.get(0).getContent());
//	}
	public static void main(String[] args) throws SQLException {
		// TODO Auto-generated method stub
		ModelContent model= new ModelContent();
		for (Content content : model.getListcontentByTitle("a")) {
			System.out.println(content.getBrief());
		}
	}
	
}
