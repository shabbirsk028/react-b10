package com.demo.rest.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
public class Course {
	
	@Id
	@GeneratedValue
	private int courseId;
	//@Getter
	//@Setter
	private String courseName;
	//@Setter
	private int courseDuration;
	
//	
//	@JsonIgnore
//	@ManyToMany(mappedBy="courses", cascade=CascadeType.PERSIST)
//	private List<Student> student = new ArrayList<>();

}
