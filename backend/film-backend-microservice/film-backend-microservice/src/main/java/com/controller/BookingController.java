package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Booking;
import com.service.BookingService;

@RestController
@RequestMapping("booking")
@CrossOrigin()
public class BookingController {
	
	@Autowired
	BookingService bookServ;
	
	@PostMapping(value="store",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String createBooking(@RequestBody Booking booking, @RequestHeader("email") String email) {
		return bookServ.createBooking(booking, email);
	}
	
	@GetMapping(value="list", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Booking> getBooking(@RequestHeader("email") String email){
		return bookServ.getBookingsFromEmail(email);
	}
	
}
