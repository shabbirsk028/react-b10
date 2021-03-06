package com.demo.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.rest.entity.Profile;

@Repository
public interface IProfileDao extends JpaRepository<Profile, Integer> {

}
