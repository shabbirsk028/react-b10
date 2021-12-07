package com.demo.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.rest.dao.ICourseDao;
import com.demo.rest.entity.Course;

@Service
public class CourseServiceImpl implements ICourseService {

	@Autowired
	ICourseDao courseDao;
	
	@Override
	public List<Course> getAllCourses() {
		return courseDao.findAll();
	}

	@Override
	public Course getCourseByCourseId(int courseId) {
		return courseDao.findById(courseId).get();
	}

	@Override
	public Course addCourse(Course course) {
		return courseDao.save(course);
	}

}
