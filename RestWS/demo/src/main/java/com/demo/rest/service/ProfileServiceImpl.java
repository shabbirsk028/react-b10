package com.demo.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.rest.dao.IProfileDao;
import com.demo.rest.entity.Profile;

@Service
public class ProfileServiceImpl implements IProfileService {

	@Autowired
	IProfileDao profileDao;
	
	@Override
	public List<Profile> getProfiles() {
		return profileDao.findAll();
	}

	@Override
	public Profile addProfile(Profile profile) {
		return null;
	}

	@Override
	public void deleteProfile(int profileId) {
		

	}

	@Override
	public Profile updateProfile(int profileId, Profile profile) {
		
		return null;
	}

	@Override
	public Profile getProfileById(int profileId) {
		
		return null;
	}

}
