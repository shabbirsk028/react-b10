package com.demo.rest.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentDto {
	private int rollNo;
	private String fullName;
	private String contactNo;
	private String email;
	private String role;
	private int loginId;
	
}
