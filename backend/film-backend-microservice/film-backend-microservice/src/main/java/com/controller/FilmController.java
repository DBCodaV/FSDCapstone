package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.entity.Film;
import com.service.FilmService;

@RestController
@RequestMapping("films")
@CrossOrigin()	
public class FilmController {
	@Autowired
	FilmService filmServ;
	
	@GetMapping(value="list", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Film> getFilms() {
		return filmServ.getFilms();
	}
	
	@GetMapping(value="byid/{fid}",produces=MediaType.APPLICATION_JSON_VALUE)
	public Film getFilm(long fid) {
		return filmServ.getFilm(fid);
	}
	
	@PostMapping(value="add", consumes=MediaType.APPLICATION_JSON_VALUE)
	public String createFilm(@RequestBody Film film) {
		return filmServ.createFilm(film);
	}
}
