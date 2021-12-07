package com.demo.rest.service;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.rest.dao.IAddressDao;
import com.demo.rest.dao.ILoginRepository;
import com.demo.rest.dao.IStudentDao;
import com.demo.rest.dto.StudentDto;
import com.demo.rest.dto.StudentInputDto;
import com.demo.rest.entity.Address;
import com.demo.rest.entity.Login;
import com.demo.rest.entity.Student;
import com.demo.rest.exception.StudentFoundException;
import com.demo.rest.exception.StudentNotFoundException;

@Service
public class StudentServiceImpl implements IStudentService {

	@Autowired
	IStudentDao studentDao;
	
	@Autowired
	IAddressDao addrDao;
	
	@Autowired
	ILoginRepository loginDao;
	
	private static Logger logger = LogManager.getLogger();
	
	@Override
	public List<Student> getAllStudents() {
		return studentDao.findAll();
	}

	@Override
	public StudentDto getStudentByRollNo(int rollNo) throws StudentNotFoundException {
		Optional<Student> student = studentDao.findById(rollNo);
		if(!student.isPresent()) {
			throw new StudentNotFoundException("Student not found with given rollNo "+rollNo);
		}
		
		Student std = student.get();
		
		// Create dto obj
		StudentDto dto = new StudentDto();
		
		// update dto with student details
		dto.setRollNo(std.getRollNo());
		dto.setFullName(std.getFullName());
		dto.setContactNo(std.getContactNo());
		dto.setEmail(std.getLogin().getEmail());
		dto.setRole(std.getLogin().getRole());
		dto.setLoginId(std.getLogin().getLoginId());
		return dto;
	}

	@Override
	public Student addStudent(StudentInputDto student) {
		
		// Create student object
		Student std = new Student();
		
		// convert studentdto obj to student obj
		
		std.setContactNo(student.getContactNo());
		std.setFullName(student.getFullName());
		
		Login login = new Login();
		login.setEmail(student.getEmail());
		login.setRole(student.getRole());
		login.setPassword(student.getPassword());
		
		std.setLogin(login);
				
		return studentDao.save(std);
	}

	@Override
	public Student updateStudent(int rollNo, StudentDto student) throws StudentNotFoundException {
		
		Optional<Student> optional = studentDao.findById(rollNo);
		if(!optional.isPresent()) {
			throw new StudentNotFoundException("Student not found with given rollNo "+rollNo);
		}
		Student std = optional.get();
		
		std.setFullName(student.getFullName());
		std.setContactNo(student.getContactNo());
	
		Login login = loginDao.findById(student.getLoginId()).get();
		
	    login.setEmail(student.getEmail());
	    login.setRole(student.getRole());
	    
		std.setLogin(login);
		return studentDao.save(std);
	}

	@Override
	public Student deleteStudentByRollNo(int rollNo) {
		Student std = studentDao.findById(rollNo).get();
		studentDao.deleteById(rollNo);
		return std;
	}

	@Override
	public Student updateStudentName(int rollNo, String newName) {
		Student std = studentDao.findById(rollNo).get();
		std.setFullName(newName);
		return studentDao.save(std);
	}

	@Override
	public Student getStudentByName(String fullName) {
		Student student = studentDao.findByFullName(fullName);
		return student;
	}

	@Override
	public void deleteStudentByName(String fullName) {
		studentDao.deleteByName(fullName);
		
	}

	@Override
	public Student updateStudentAddress(int rollNo, List<Address> addresses) {
		Optional<Student> std = studentDao.findById(rollNo);
		if(!std.isPresent()) {
			throw new StudentFoundException("Student not found with given rollNo "+rollNo);
		}
//		for(Address addr: addresses) {
//			addr.setStudent(std.get());
//		}
		//std.get().getAddresses().addAll(addresses);
		return studentDao.save(std.get());
	}

}
