package com.demo.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.rest.entity.Course;

@Repository
public interface ICourseDao extends JpaRepository<Course, Integer> {

}
