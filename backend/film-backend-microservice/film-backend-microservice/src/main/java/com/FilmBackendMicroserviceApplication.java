package com;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.entity.Cinema;
import com.entity.Login;
import com.repository.CinemaRepository;
import com.repository.LoginRepository;

import jakarta.annotation.PostConstruct;

@SpringBootApplication(scanBasePackages = "com")
@EnableDiscoveryClient
@EntityScan(basePackages = "com.entity")
@EnableJpaRepositories(basePackages = "com.repository")
public class FilmBackendMicroserviceApplication {
	@Autowired
	LoginRepository loginRepository;
	
	@Autowired
	CinemaRepository cinemaRepo;
	@PostConstruct
	public void init() {
		Login ll = new Login();
		ll.setEmailid("admin@gmail.com");
		ll.setPassword("admin@123");
		ll.setTypeofuser("admin");
		Optional<Login> result  = loginRepository.findById("admin@gmail.com");
		if(result.isPresent()) {
			System.out.println("Already account present");
		}else {
			loginRepository.save(ll);
			System.err.println("Admin account created");
		}
		Cinema cin = new Cinema();
		cin.setAddress("Somewhere");
		cin.setName("The Lux");
		Optional<Cinema> res2  = cinemaRepo.getCinemaByName(cin.getName());
		if(res2.isPresent()) {
			System.out.println("Already account present");
		} else {
			cinemaRepo.save(cin);
			System.err.println("Admin account created");
		}
	}
	
	public static void main(String[] args) {
		SpringApplication.run(FilmBackendMicroserviceApplication.class, args);
		System.out.println("Backend Running");
	}

}
