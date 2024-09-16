package com.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Cinema {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long cinema_id;
	private String name;
	private String address;
	
	@OneToMany
    @JoinColumn(name = "department_id")
	private List<Film> films;

	public long getCinema_id() {
		return cinema_id;
	}

	public void setCinema_id(long cinema_id) {
		this.cinema_id = cinema_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public List<Film> getFilms() {
		return films;
	}

	public void setFilms(List<Film> films) {
		this.films = films;
	}
	
}
