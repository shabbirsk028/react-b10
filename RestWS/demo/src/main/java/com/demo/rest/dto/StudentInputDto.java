package com.demo.rest.dto;

import lombok.Data;

@Data
public class StudentInputDto {
	private String fullName;
	private String contactNo;
	private String email;
	private String role;
	private String password;

}
