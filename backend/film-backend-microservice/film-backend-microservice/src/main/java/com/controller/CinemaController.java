package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Booking;
import com.entity.Cinema;
import com.entity.Login;
import com.service.CinemaService;
import com.service.FilmService;

@RestController
@RequestMapping("cinema")
@CrossOrigin()	
public class CinemaController {
	@Autowired
	CinemaService cinServ;
	
	@GetMapping(value="list", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Cinema> getCinemas() {
		return cinServ.getCinemas();
	}
	
	@GetMapping(value="byid/{cid}",produces=MediaType.APPLICATION_JSON_VALUE)
	public Cinema getCinema(@PathVariable(value="cid") Long cid) {
		return cinServ.getCinema(cid);
	}
	
	@PostMapping(value="addFilm/{cid}/{fid}")
	public String addFilmToCinema(@PathVariable(value="cid") Long cid, @PathVariable(value="fid") Long fid) {
		return cinServ.addFilmToCinema(cid, fid);
		
	}
	@PostMapping(value="add",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String addCinema(@RequestBody Cinema c) {
		return cinServ.addCinema(c);
	}

}
