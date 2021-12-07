package com.demo.rest.service;

import com.demo.rest.dto.LoginDto;
import com.demo.rest.entity.Login;
import com.demo.rest.exception.InvalidCredentialsException;

public interface ILoginService {
	
	LoginDto login(Login login) throws InvalidCredentialsException;
	LoginDto logout(String userId) throws InvalidCredentialsException;

}
