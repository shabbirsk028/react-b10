package com.demo.rest.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.rest.dto.LoginDto;
import com.demo.rest.entity.Login;
import com.demo.rest.exception.InvalidCredentialsException;
import com.demo.rest.service.ILoginService;


@CrossOrigin
@RestController
public class LoginController {
	@Autowired
	ILoginService loginService;
	
	private static Logger logger = LogManager.getLogger();
	
	@PostMapping("/login")
	public ResponseEntity<LoginDto> login(@RequestBody Login login) throws InvalidCredentialsException {
		LoginDto dto = loginService.login(login);
		return new ResponseEntity<>(dto, HttpStatus.OK);
	}
	
	
	@PatchMapping("/logout/{email}")
	public ResponseEntity<LoginDto> logout(@PathVariable("email") String email) throws InvalidCredentialsException  {
		logger.info(email);
		LoginDto dto = loginService.logout(email);
		return new ResponseEntity<>(dto, HttpStatus.OK);
	}
	
	
	

}
