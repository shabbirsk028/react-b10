package com.demo.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.rest.entity.Student;

@Repository
public interface IStudentDao extends JpaRepository<Student, Integer> {

	// Custom methods
	Student findByFullName(String fullName);
	//Student findByAge(int age);
	
	// JPQL Query methods
	//@Query("delete from Student s where s.fullName=:name")
	//Student deleteStudentByName(@Param("name") String fullName);
	
	// Native Query method
	@Query(value="delete from student where fullname=:name", nativeQuery=true)
	void deleteByName(@Param("name") String fullName);

}
