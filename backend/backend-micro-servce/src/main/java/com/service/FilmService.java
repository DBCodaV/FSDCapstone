package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Film;
import com.repository.FilmRepository;

@Service
public class FilmService {
	@Autowired
	FilmRepository filmRepo;
	
	public Film getFilm(Long id) {
		Optional<Film> res = filmRepo.findById(id);
		if(res.isPresent()) {
			Film f = res.get();
			return f;
		} else {
			return null;
		}
	}
	public List<Film> getFilms(){
		return filmRepo.findAll();
	}
	public String createFilm(Film film) {
		filmRepo.save(film);
		return "created";
	}
	
}
