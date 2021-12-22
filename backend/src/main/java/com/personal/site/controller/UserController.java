package com.personal.site.controller;

import javax.validation.*;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.personal.site.respository.UserRepository;
import com.personal.site.exception.ResourceNotFoundException;
import com.personal.site.model.User;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController extends IndexController {
	 
	Logger logger = LoggerFactory.getLogger(UserController.class);
			
	@Autowired
	private UserRepository userRepository; 
	
	// get users
	@GetMapping("users")
	public List<User> getAllUsers(){
		return this.userRepository.findAll();
	}
	
	// get user by id 
	@GetMapping("users/{id}")
	public ResponseEntity<User> getUserId(@PathVariable(value = "id") Long userId)
		throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId ));
		return ResponseEntity.ok().body(user);
	}
	
	// save user
	@PostMapping("users")
	public ResponseEntity<User> createUser(@RequestBody User user) throws URISyntaxException {
		User savedUser = userRepository.save(user);
		return ResponseEntity.created(new URI("/users/" + savedUser.getId())).body(savedUser);
	}
	
	
	// update user
	@PutMapping("users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") long userId, 
			@Valid @RequestBody User userDetails) throws ResourceNotFoundException {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
		
		user.setName(userDetails.getName()); 
		user.setPassword(userDetails.getPassword());
		return ResponseEntity.ok(this.userRepository.save(user));
	}
	
	// delete user
	@DeleteMapping("users/{id}")
	public Map<String,Boolean> deleteUser(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + userId));
		this.userRepository.delete(user); 
		Map<String, Boolean> response = new HashMap<>(); 
		response.put("deleted", Boolean.TRUE);
		
		return response;
	}
	}
	
	

