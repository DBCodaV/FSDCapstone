package com;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.entity.Login;
import com.repository.LoginRepository;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class BackendMicroServceApplication {
	@Autowired
	LoginRepository logRepo;
	
	@PostConstruct
	public void init() {
		Login ll = new Login();
		ll.setEmailid("admin@gmail.com");
		ll.setPassword("admin@123");
		ll.setTypeofuser("admin");
		Optional<Login> res = logRepo.findById("admin@gmail.com");
		if(res.isPresent()) {
			System.out.println("Admin present");
		} else {
			logRepo.save(ll);
			System.out.println("Admin Made");
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendMicroServceApplication.class, args);
	}

}
