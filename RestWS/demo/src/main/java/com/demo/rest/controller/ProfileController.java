package com.demo.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.rest.entity.Profile;
import com.demo.rest.service.IProfileService;

@RestController
public class ProfileController {
	
	@Autowired
	IProfileService profileService;
	
	
	@GetMapping("/profiles")
	ResponseEntity<List<Profile>> getProfiles() {
		return new ResponseEntity<>(profileService.getProfiles(), HttpStatus.OK);
	}

}
