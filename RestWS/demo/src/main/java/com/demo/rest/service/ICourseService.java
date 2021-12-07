package com.demo.rest.service;

import java.util.List;

import com.demo.rest.entity.Course;

public interface ICourseService {

	List<Course> getAllCourses();

	Course getCourseByCourseId(int courseId);

	Course addCourse(Course course);

}
