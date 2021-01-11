package com.cpg.pixogramspring.services;

import java.util.List;

import com.cpg.pixogramspring.models.Followers;

public interface FollowerService {

	void unFollowUser(int follower_id, int user_id);

	

	List<Followers> getAllFollowers();

	/**
	 * To follow a user
	 */
	//Followers followUser(Followers followerss);

	/**
	 * To follow a user
	 */
	Followers followUser(int user_id, String userEmail, String follower_email);

}
