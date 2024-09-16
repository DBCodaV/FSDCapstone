package com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Login;
import com.repository.LoginRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository loginRepo;
	
	public String signIn(Login login) {
		Optional<Login> res = loginRepo.findById(login.getEmailid());
		if(res.isPresent()) {
			Login ll = res.get();
			if(ll.getPassword().equals(login.getPassword())) {
				if(ll.getTypeofuser().equals(login.getTypeofuser()) && ll.getTypeofuser().equals("admin")) {
					return "Admin login success";
				} else if (ll.getTypeofuser().equals(login.getTypeofuser()) && ll.getTypeofuser().equals("user")) {
					return "User login success";
				} else {
					return "Wrong type of user";
				}
			}
			else {
				return "Password not correct";
			}
		} else {
			return "Email not found";
		}
	}
	public String signUp(Login login) {
		Optional<Login> res = loginRepo.findById(login.getEmailid());
		if(res.isPresent()) {
			return "Email already used";
		} else if(login.getTypeofuser().equals("admin")) {
			return "Cannot create admin account";
		} else {
			loginRepo.save(login);
			return "Account created";
		}
	}

}