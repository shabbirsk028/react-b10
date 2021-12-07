package com.demo.rest.controller;

import java.util.List;

import javax.validation.Valid;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.rest.dto.StudentDto;
import com.demo.rest.dto.StudentInputDto;
import com.demo.rest.entity.Address;
import com.demo.rest.entity.Student;
import com.demo.rest.exception.StudentNotFoundException;
import com.demo.rest.service.IStudentService;

@RestController
@CrossOrigin
public class StudentController {
	
	@Autowired
	IStudentService studentService;
	
	private static Logger logger = LogManager.getLogger();
	
	// Get all students - GET
	// Get - /students
	@GetMapping("/students")
	ResponseEntity<List<Student>> getAllStudents() {
		logger.info("Sending request to service layer for getting studends");
		return new ResponseEntity<>(studentService.getAllStudents(), HttpStatus.OK); // 200 Ok
	}

	// Get student by rollNo - GET
	@GetMapping("/students/rollNo/{rollNo}")
	ResponseEntity<StudentDto> getStudentByRollNo(@PathVariable("rollNo") int rollNo) throws StudentNotFoundException {
	 logger.info("Sending request to service layer to get student by rollNo");
	 StudentDto student = studentService.getStudentByRollNo(rollNo);
	 logger.debug("Received student object from service layer");
	 logger.info("Returning student object");
	 return new ResponseEntity<>(student, HttpStatus.OK); // 200 Ok
		
	}
	
	// Get student by Name - GET
	@GetMapping("/students/name/{stdName}")
	ResponseEntity<Student> getStudentByName(@PathVariable("stdName") String fullName) {
		Student student = studentService.getStudentByName(fullName);
		return new ResponseEntity<>(student, HttpStatus.OK);
	}
	
	// Add new student - POST
	@PostMapping("/students")
	ResponseEntity<Student> addStudent(@Valid @RequestBody StudentInputDto student) {
		logger.info(student);
		Student std = studentService.addStudent(student);
		return new ResponseEntity<>(std, HttpStatus.CREATED); // 201 created
	}
	
	// Delete student by roll number - DELETE
	@DeleteMapping("/students/{rollNo}")
	ResponseEntity<Student> deleteStudentByRollNo(@PathVariable("rollNo") int rollNo) {
		Student student= studentService.deleteStudentByRollNo(rollNo);
		return new ResponseEntity<>(student, HttpStatus.OK);
	}
	
	@DeleteMapping("/students/delete/{fullName}")
	ResponseEntity<Void> deleteStudent(@PathVariable("fullName") String fullName) {
		studentService.deleteStudentByName(fullName);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	// Update student - PUT
	@PutMapping("/students/{rollNo}")
	ResponseEntity<Student> updateStudent(@PathVariable("rollNo") int rollNo, @RequestBody StudentDto student) throws StudentNotFoundException {
	 Student std = studentService.updateStudent(rollNo, student);
	 return new ResponseEntity<>(std, HttpStatus.OK);
	}

	// update student name - PATCH
	@PatchMapping("/students/{rollNo}")
	ResponseEntity<Student> updateStudentName(@PathVariable("rollNo") int rollNo, @RequestBody String newName) {
		Student student = studentService.updateStudentName(rollNo, newName);
		return new ResponseEntity<>(student, HttpStatus.OK);
	}

	/*
	// update student age -  PATCH
	Student updateStudentAge(int rollNo, int newAge) {}
	
	*/
	@PatchMapping("/students/updateAddr/{rollNo}")
	ResponseEntity<Student> updateStudentAddress(@PathVariable("rollNo") int rollNo, @RequestBody List<Address> addresses) {
		return new ResponseEntity<>(studentService.updateStudentAddress(rollNo, addresses), HttpStatus.OK);
	}
	

}
