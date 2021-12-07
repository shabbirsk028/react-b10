package com.demo.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.rest.entity.Course;

import com.demo.rest.service.ICourseService;

@RestController
public class CourseController {
	
	@Autowired
	ICourseService courseService;
	
	@GetMapping("/courses")
	ResponseEntity<List<Course>> getAllCourses() {
		return new ResponseEntity<>(courseService.getAllCourses(), HttpStatus.OK); // 200 Ok
	}

	// Get Course by course id - GET
	@GetMapping("/courses/{courseId}")
	ResponseEntity<Course> getCourseByCourseId(@PathVariable("courseId") int courseId) {
	 Course course = courseService.getCourseByCourseId(courseId);
	 return new ResponseEntity<>(course, HttpStatus.OK); // 200 Ok
		
	}

	// Add new course - POST
		@PostMapping("/courses")
		ResponseEntity<Course> addCourse(@RequestBody Course course) {
			Course c = courseService.addCourse(course);
			return new ResponseEntity<>(c, HttpStatus.CREATED); // 201 created
		}

}
