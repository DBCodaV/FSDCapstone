package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Booking;
import com.entity.Login;
import com.repository.BookingRepository;
import com.repository.LoginRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository bookRepo;
	
	@Autowired
	LoginRepository loginRepo;
	
	public List<Booking> getBookingsFromEmail(String email){
		Optional<Login> res = loginRepo.findById(email);
		if(res.isPresent()) {
			Login user = res.get();
			return user.getBookings();
		} else {
			return null;
		}
	}
	public Booking getBooking(Long id) {
		Optional<Booking> res = bookRepo.findById(id);
		if(res.isPresent()) {
			Booking book = res.get();
			return book;
		} else {
			return null;
		}
	}
	public String createBooking(Booking booking, String email) {
		System.out.println(booking);
		System.out.println(email);
		List<Booking> curList = getBookingsFromEmail(email);
		if(curList==null) {
			return "Booking failed";
		}
		Booking saved = bookRepo.save(booking);
		curList.add(saved);
		Login user = loginRepo.findById(email).get();
		user.setBookings(curList);
		loginRepo.save(user);
		return "Booking created";
	}
}
