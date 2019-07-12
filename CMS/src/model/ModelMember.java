package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import com.sun.org.apache.xerces.internal.impl.xpath.regex.ParseException;

import object.Member;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
public class ModelMember {
	public Member getUser(String email) throws SQLException {
		Connection conect = DBConnect.getConnection();
		String sql = "SELECT * FROM member WHERE email=?";
		PreparedStatement ps = conect.prepareCall(sql);
		ps.setString(1, email);
		ResultSet rs = ps.executeQuery();
		Member member = new Member();
		while (rs.next()) {
			member.setId(rs.getInt("id"));
			member.setPassword(rs.getString("password"));
			member.setEmail(rs.getString("email"));
			String firstName = rs.getString("firstname");
			member.setCreatedDate(rs.getString("createdDate"));
			member.setUpdateTime(rs.getString("updateTime"));
			member.setRole(rs.getInt("role"));
			if (firstName == null) {
				member.setFirstname("");
				member.setLastname("");
				member.setPhone("");
				member.setDescription("");
			} else {
				member.setFirstname(firstName);
				member.setLastname(rs.getString("lastname"));
				member.setPhone(rs.getString("phone"));
				member.setDescription(rs.getString("description"));

			}

		}
		return member;
	}

	public boolean updateMember(Member member, int id) throws SQLException {
		Connection connect = DBConnect.getConnection();
		try {
			String sql = "UPDATE member SET firstname = ?,  lastname = ?, email=?,phone=?,description=?,updateTime=? WHERE id=?";
			PreparedStatement ps = connect.prepareCall(sql);
			ps.setString(1, member.getFirstname());
			ps.setString(2, member.getLastname());
			ps.setString(3, member.getEmail());
			ps.setString(4, member.getPhone());
			ps.setString(5, member.getDescription());
			java.util.Date dt = new java.util.Date();
			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String currentTime = sdf.format(dt);
			// ps.setDate(6, new java.sql.Date((new Date()).getTime()));

			ps.setString(6, currentTime);
			ps.setInt(7, id);
			ps.executeUpdate();
		} catch (Exception ex) {
			ex.printStackTrace();
			return false;
		}
		return true;
	}

	public String insertMember(Member member) {
		Connection connection;
		connection = DBConnect.getConnection();
		java.util.Date dt15 = new java.util.Date(System.currentTimeMillis() + (15 * 60 * 1000));
		java.util.Date dt = new java.util.Date(System.currentTimeMillis() + (15 * 60 * 1000));
		java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String currentTime = sdf.format(dt);
		String currentTime15 = sdf.format(dt15);
		String key = encodedB64EP(member.getEmail()+"."+SendMail.getRandomNumberString());
		String sql_insert = "insert into cms.member (`username`, `email`, `password`,verification_key, `createddate`,updateTime,role) values ( '"
				+ member.getUsername() + "','" + member.getEmail() + "','" + member.getPassword() + "','" + key + "','"
				+ currentTime + "','"+currentTime15+"',0)";
		Statement statement;
		try {
			statement = (Statement) connection.createStatement();
			statement.executeUpdate(sql_insert);
			return key;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return null;
	}

	public static String encodedB64EP(String key) {
		Base64Hash b64 = new Base64Hash();
		return b64.encodeBase64(key);
	}
public String checkActive(String key) {

		String msg = "";
		Connection conect = DBConnect.getConnection();
		String sql = "SELECT * FROM member WHERE verification_key=? ";
		PreparedStatement ps;
		try {
			ps = conect.prepareCall(sql);
			ps.setString(1, key);
			ResultSet rs = ps.executeQuery();
			
			if(rs.first()) {
				sql = "SELECT * FROM member WHERE verification_key=? and updateTime >=?";
				ps = conect.prepareCall(sql);
				ps.setString(1, key);
				java.util.Date dt = new java.util.Date();
				java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				String currentTime = sdf.format(dt);
				ps.setString(2, currentTime);
				 rs = ps.executeQuery();
				 if (rs.first()) {
					 msg = rs.getString("email");
						sql = "UPDATE member SET verification_key = 'activated'and updateTime=? WHERE email=?";
						ps = conect.prepareCall(sql);
						ps.setString(1, currentTime);
						ps.setString(2, msg);
						ps.executeUpdate();
						return msg;
				 }
				 return "Link has expired";
				

			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return "Your account has been activated!";

	}

	public boolean checkExistEmail(String email) {
		Connection connection;
		connection = DBConnect.getConnection();
		String sql = "select * from cms.member where email = '" + email + "'";

		Statement statement;
		try {
			statement = (Statement) connection.createStatement();

			ResultSet resultSet = statement.executeQuery(sql);
			if (resultSet.first()) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;

	}

	public boolean checkExistUsername(String username) {
		Connection connection;
		connection = DBConnect.getConnection();
		String sql = "select * from cms.member where username = '" + username + "'";

		Statement statement;
		try {
			statement = (Statement) connection.createStatement();

			ResultSet resultSet = statement.executeQuery(sql);
			if (resultSet.first()) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;

	}
	public int countMember() {
		  Connection connect = DBConnect.getConnection();
	        try {
	            String sql = "SELECT count(id) FROM member where role!=1";
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
	
	public boolean deleteMember(int id) throws SQLException
	{
		Connection connection =DBConnect.getConnection();
		String sql = "delete from member where id=?";
		PreparedStatement ps= connection.prepareStatement(sql);
		ps.setInt(1,id);
		ps.executeUpdate();
		return true;
	}
	public boolean updateMemberAdmin(Member member, int id) throws SQLException {
		Connection connect = DBConnect.getConnection();
		try {
			String sql = "UPDATE member SET firstname=?,lastname=?, username = ?,phone=?,description=?,updateTime=? WHERE id=?";
			PreparedStatement ps = connect.prepareCall(sql);
			ps.setString(1, member.getFirstname());
			ps.setString(2, member.getLastname());
			ps.setString(3, member.getUsername());
			ps.setString(4, member.getPhone());
			ps.setString(5, member.getDescription());
			java.util.Date dt = new java.util.Date();
			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String currentTime = sdf.format(dt);
			// ps.setDate(6, new java.sql.Date((new Date()).getTime()));

			ps.setString(6, currentTime);
			ps.setInt(7, id);
			ps.executeUpdate();
		} catch (Exception ex) {
			ex.printStackTrace();
			return false;
		}
		return true;
	}
	public boolean updateMemberAdminPass(Member member, int id) throws SQLException {
		Connection connect = DBConnect.getConnection();
		Base64Hash b64 = new Base64Hash();
		try {
			String sql = "UPDATE member SET firstname=?,lastname=?, username = ?,phone=?,description=?,updateTime=?,password=? WHERE id=?";
			PreparedStatement ps = connect.prepareCall(sql);
			ps.setString(1, member.getFirstname());
			ps.setString(2, member.getLastname());
			ps.setString(3, member.getUsername());
			ps.setString(4, member.getPhone());
			ps.setString(7,b64.encodeBase64(member.getPassword()) );
			ps.setString(5, member.getDescription());
			java.util.Date dt = new java.util.Date();
			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String currentTime = sdf.format(dt);
			// ps.setDate(6, new java.sql.Date((new Date()).getTime()));

			ps.setString(6, currentTime);
			ps.setInt(8, id);
			ps.executeUpdate();
			SendMail.send(member.getEmail(),"CMS notifycation" , "Your pass has been changed to"+member.getPassword());
		} catch (Exception ex) {
			ex.printStackTrace();
			return false;
		}
		return true;
	}
	public boolean checkLogin(String email, String pass) {
		Connection connection;
		Base64Hash b64Hash = new Base64Hash();
		try {
			pass = b64Hash.encodeBase64(pass);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		connection = DBConnect.getConnection();
		String sql = "select password from cms.member where email = '" + email + "'and password = '" + pass + "'";

		Statement statement;
		try {
			statement = (Statement) connection.createStatement();
			ResultSet resultSet = statement.executeQuery(sql);
			if (resultSet.first()) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;

	}
	public List<Member> getListMember() throws SQLException, java.text.ParseException
	{
		Connection connection =DBConnect.getConnection();
		List<Member>list = new ArrayList<Member>();
		String sql="Select * from member where role!='1'";
		PreparedStatement ps= connection.prepareStatement(sql);
		ResultSet resultSet =ps.executeQuery();
		while(resultSet.next())
		{
			object.Member member = new object.Member();
			member.setId(resultSet.getInt("id"));
			member.setFirstname(resultSet.getString("firstname"));
			member.setLastname(resultSet.getString("lastname"));
			member.setUsername(resultSet.getString("username"));
			member.setPhone(resultSet.getString("phone"));
			member.setEmail(resultSet.getString("email"));
			member.setDescription(resultSet.getString("description"));		

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
			member.setCreatedDate(currentTime);
			
			String ut = resultSet.getString("updateTime");
			java.text.SimpleDateFormat dff = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			java.text.SimpleDateFormat sdff = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm");
			Date udate = new Date();
			try {
				 udate = (Date)df.parse(dt);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			String udateTime = sdff.format(udate);
			member.setUpdateTime(udateTime);
			list.add(member);
			}
		return list;
	}
	public boolean setPass(String email, String pass) {
		Connection connect = DBConnect.getConnection();
		Base64Hash b64 = new Base64Hash();
		try {
			String sql = "UPDATE member SET password=?,updateTime=? WHERE email=?";
			PreparedStatement ps = connect.prepareCall(sql);
			ps.setString(1, b64.encodeBase64(pass));

			ps.setString(3, email);

			java.util.Date dt = new java.util.Date();
			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String currentTime = sdf.format(dt);
			// ps.setDate(6, new java.sql.Date((new Date()).getTime()));

			ps.setString(2, currentTime);

			ps.executeUpdate();
		} catch (Exception ex) {
			ex.printStackTrace();
			return false;
		}
		return true;
	}
	
	public boolean saveKeyForgotPass(String email, String key) {
		Connection connect = DBConnect.getConnection();
		try {
			String sql = "UPDATE member SET verification_forgot=?,expireForgot=? WHERE email=?";
			PreparedStatement ps = connect.prepareCall(sql);
			ps.setString(1, key);

			ps.setString(3, email);

			java.util.Date dt = new java.util.Date(System.currentTimeMillis() + (15 * 60 * 1000));// now+15 min
			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String currentTime = sdf.format(dt);
			// ps.setDate(6, new java.sql.Date((new Date()).getTime()));

			ps.setString(2, currentTime);

			ps.executeUpdate();
		} catch (Exception ex) {
			ex.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean updateNewPass(String key,String pass) {
		Connection connect = DBConnect.getConnection();
		Base64Hash b64 = new Base64Hash();
		pass= b64.encodeBase64(pass);
		try {

			String sql = "UPDATE member SET password=? , updateTime=? WHERE verification_forgot=?";
			PreparedStatement ps = connect.prepareCall(sql);
			ps.setString(1, pass);

			ps.setString(3, key);

			java.util.Date dt = new java.util.Date(System.currentTimeMillis() + (15 * 60 * 1000));// now+15 min
			java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String currentTime = sdf.format(dt);
			// ps.setDate(6, new java.sql.Date((new Date()).getTime()));

			ps.setString(2, currentTime);

			ps.executeUpdate();
			
		} catch (Exception ex) {
			ex.printStackTrace();
			return false;
		}
		return true;
	}

	public boolean checkActivate(String email) {
		Connection connection;

		connection = DBConnect.getConnection();
		String sql = "select * from cms.member where email = '" + email + "' and verification_key ='activated'";

		Statement statement;
		try {
			statement = (Statement) connection.createStatement();

			ResultSet resultSet = statement.executeQuery(sql);
			if (resultSet.first()) {
				return true;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;

	}
	public String getEmailbyForgotkey(String keyEncoded)
	{
		Connection connection;

		connection = DBConnect.getConnection();
		String sql = "select * from cms.member where verification_forgot = '" + keyEncoded + "'";
		String email="";
		Statement statement;
		try {
			statement = (Statement) connection.createStatement();

			ResultSet resultSet = statement.executeQuery(sql);
			if (resultSet.first()) {
				
				email=resultSet.getString("email");

				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return email;
	}
	public String checkForgotKey(String keyEncoded) {
		Connection connection;

		connection = DBConnect.getConnection();
		String sql = "select * from cms.member where verification_forgot = '" + keyEncoded + "'";

		Statement statement;
		try {
			statement = (Statement) connection.createStatement();

			ResultSet resultSet = statement.executeQuery(sql);
			if (resultSet.first()) {
				java.util.Date dt = new java.util.Date();// now
				java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				String currentTime = sdf.format(dt);
				sql = "select * from cms.member where verification_forgot = '" + keyEncoded + "' and expireForgot >='"
						+ currentTime + "'";
				resultSet = statement.executeQuery(sql);
				if (resultSet.first()) {
					return "success";
				}

				return "Link has expired!";
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "404:)";

	}
}
