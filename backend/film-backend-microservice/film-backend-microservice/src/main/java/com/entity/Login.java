package com.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Login {
	@Id
	private String emailid;
	private String password;
	private String typeofuser;
	
	@OneToMany
	@JoinColumn(name = "email_id")
	private List<Booking> bookings;

	public List<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTypeofuser() {
		return typeofuser;
	}

	public void setTypeofuser(String typeofuser) {
		this.typeofuser = typeofuser;
	}

}