package com.demo.rest.service;

import java.util.List;

import com.demo.rest.entity.Profile;

public interface IProfileService {
	
	List<Profile> getProfiles();
	Profile addProfile(Profile profile);
	void deleteProfile(int profileId);
	Profile updateProfile(int profileId, Profile profile);
	Profile getProfileById(int profileId);

}
