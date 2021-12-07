package com.demo.rest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.rest.entity.Address;


@Repository
public interface IAddressDao extends JpaRepository<Address, Integer> {

}
