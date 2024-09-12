package com.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Film {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long film_id;
	
	private String name;
	private String rating;
	
	public long getFilm_id() {
		return film_id;
	}
	public void setFilm_id(long film_id) {
		this.film_id = film_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	
	
	
	
}
