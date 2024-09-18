package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Cinema;
import com.entity.Film;
import com.repository.CinemaRepository;
import com.repository.FilmRepository;

@Service
public class CinemaService {
	@Autowired
	CinemaRepository cinemaRepo;
	
	@Autowired
	FilmService filmServ;
	
	public Cinema getCinema(Long id) {
		Optional<Cinema> res = cinemaRepo.findById(id);
		if(res.isPresent()) {
			return res.get();
		} else {
			return null;
		}
		
	}
	public List<Cinema> getCinemas() {
		return cinemaRepo.findAll();
	}
	public String addFilmToCinema(Long cid, Long fid) {
		Cinema cin = getCinema(cid);
		if(cin==null) {
			return "No Cinema Found";
		}
		Film film = filmServ.getFilm(fid);
		if(film==null) {
			return "No Film Found";
		}
		List<Film> preList = cin.getFilms();
		preList.add(film);
		cin.setFilms(preList);
		cinemaRepo.save(cin);
		return "Film Added";
	}

	public String addCinema(Cinema c) {
		cinemaRepo.save(c);
		return "Cinema Added";
	}
}
