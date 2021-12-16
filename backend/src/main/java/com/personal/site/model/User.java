package com.personal.site.model;

import javax.persistence.*; 

@Entity
@Table(name = "users")
public class User {
	
	private long id; 
	private String username; 
	private String password; 
	public User() {
	
	}
	
	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	     public long getId() {
	        return id;
	    }
	  
	    public void setId(long id) {
	        this.id = id;
	    }

	@Column(name = "username", nullable = false)
	public String getName() {
		return username;
	}
	
	public void setName(String username) {
		this.username = username;
	}
	
	@Column(name = "password", nullable = false)
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	} 
	
	@Override
	public String toString() {
	     return "User [id=" + id + ", name=" + username + "]";
	    }
	
}
