package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Cinema;
import com.service.CinemaService;

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
	public Cinema getCinema(long cid) {
		return cinServ.getCinema(cid);
	}

}
