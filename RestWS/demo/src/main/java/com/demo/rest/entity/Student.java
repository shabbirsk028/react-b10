package com.demo.rest.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Entity
@Table(name="student")
public class Student { 
	
	

	//Fields
	@Id
	@GeneratedValue
	private int rollNo;
	
	@Column(name="fullname")
	@NotEmpty
	@Size(min=3, message="student fullname should have atleast 3 char")
	private String fullName;
	
	private String contactNo;
	
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="login")
	private Login login;
	 
	@JsonIgnore
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="profile_fk")
	Profile profile;
	
//	@JsonIgnore
//	@OneToMany(mappedBy="student", cascade=CascadeType.ALL)
//	//@JoinColumn(name="student_addr_fk", referencedColumnName = "rollNo")
//	private List<Address> addresses = new ArrayList<>();
	
	/*
	@JsonIgnore
	@ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(
		name = "student_course", 
		joinColumns = { @JoinColumn(name = "student_rollNo") }, 
		inverseJoinColumns = { @JoinColumn(name = "course_id") }
	)
	private List<Course> courses=new ArrayList<>();
	*/
	
	public Student(int rollNo, String fullName) {
		this.rollNo = rollNo;
		this.fullName = fullName;
	}
}
