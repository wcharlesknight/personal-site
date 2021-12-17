package com.personal.site.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.personal.site.exception.ResourceNotFoundException;
import com.personal.site.model.User;
import com.personal.site.respository.UserRepository;

public class LoginController extends IndexController {

	@Autowired
	private UserRepository userRepository; 
	
	@GetMapping("login/{id}")
	public ResponseEntity<User> getEmployeeId(@PathVariable(value = "id") Long userId)
		throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId ));
		return ResponseEntity.ok().body(user);
	}
}
