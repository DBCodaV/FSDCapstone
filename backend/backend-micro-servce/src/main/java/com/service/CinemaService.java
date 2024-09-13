package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Cinema;
import com.repository.CinemaRepository;

@Service
public class CinemaService {
	@Autowired
	CinemaRepository cinemaRepo;
	
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
	

}
