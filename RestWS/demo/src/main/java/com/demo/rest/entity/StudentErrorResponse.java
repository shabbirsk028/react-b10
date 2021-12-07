package com.demo.rest.entity;

import lombok.Data;

@Data
public class StudentErrorResponse {
	
	private int status;
	private String message;
	private long timeStamp;

}
