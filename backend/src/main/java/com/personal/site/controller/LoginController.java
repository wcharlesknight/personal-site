package com.personal.site.controller;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.personal.site.exception.ResourceNotFoundException;
import com.personal.site.model.User;
import com.personal.site.respository.UserRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LoginController extends IndexController {
		
	@Autowired
	private UserRepository userRepository; 
	
	@PostMapping("login")
	public ResponseEntity<User> getUserByNameAndPassword(@Valid @RequestBody User loginUser)
		throws ResourceNotFoundException {
		User user = userRepository.findByNameAndPassword(loginUser.username, loginUser.password);
		return user
	}
}
