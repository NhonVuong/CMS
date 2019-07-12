package object;

import java.util.Date;

public class Member {

	private int id;
	private String firstname;
	private String lastname;
	private String username;
	private String password;
	private String phone;
	private String email;
	private String description;
	private String createdDate;
	private String updateTime;
	
	private int role;

	public int getRole() {
		return role;
	}
	public void setRole(int role) {
		this.role = role;
	}
	public Member(int id, String firstname, String lastname, String username, String password, String phone,
			String email, String description, String createdDate, String updateTime) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.password = password;
		this.phone = phone;
		this.email = email;
		this.description = description;
		this.createdDate = createdDate;
		this.updateTime = updateTime;
	}
	public Member()
	{
		
	}
	public Member(String password, String email) {
		this.password = password;
		this.email = email;
	}

	public Member(String username, String password, String email, String createdDate) {

		this.username = username;
		this.password = password;
		this.email = email;
		this.createdDate = createdDate;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(String currentTime) {
		this.createdDate = currentTime;
	}

	public String getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(String
			updateTime) {
		this.updateTime = updateTime;
	}

}