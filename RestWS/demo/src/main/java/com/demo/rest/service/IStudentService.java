package com.demo.rest.service;

import java.util.List;

import javax.validation.Valid;

import com.demo.rest.dto.StudentDto;
import com.demo.rest.dto.StudentInputDto;
import com.demo.rest.entity.Address;
import com.demo.rest.entity.Student;
import com.demo.rest.exception.StudentNotFoundException;

public interface IStudentService {
	
	List<Student> getAllStudents();
	StudentDto getStudentByRollNo(int rollNo) throws StudentNotFoundException;
	//Student addStudent(StudentDto student);
	Student addStudent(StudentInputDto student);
	//Student updateStudent(int rollNo, Student student) throws StudentNotFoundException;
	Student deleteStudentByRollNo(int rollNo);
	Student updateStudentName(int rollNo, String newName);
	Student getStudentByName(String fullName);
	void deleteStudentByName(String fullName);
	Student updateStudentAddress(int rollNo, List<Address> addresses);
	Student updateStudent(int rollNo, StudentDto student) throws StudentNotFoundException;
}
