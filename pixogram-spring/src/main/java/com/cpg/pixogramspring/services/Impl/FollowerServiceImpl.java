package com.cpg.pixogramspring.services.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpg.pixogramspring.constants.UserConstants;
import com.cpg.pixogramspring.exceptions.NotAUserException;
import com.cpg.pixogramspring.exceptions.AlreadyExistsException;
import com.cpg.pixogramspring.exceptions.NotFoundException;
import com.cpg.pixogramspring.models.Followers;
import com.cpg.pixogramspring.models.User;
import com.cpg.pixogramspring.repositories.FollowerRepository;
import com.cpg.pixogramspring.repositories.UserRepository;
import com.cpg.pixogramspring.services.FollowerService;

@Service
public class FollowerServiceImpl implements FollowerService {

	@Autowired
	FollowerRepository followerRepository;
	@Autowired
	UserRepository userRepository;

	/**
	 * To follow a user
	 */
	
	@Override
	public Followers followUser(int user_id, String userEmail, String follower_email) {
		Optional<User> foundUser = userRepository.findByUserIdAndEmail(user_id, userEmail);
		User follower = userRepository.findByEmail(follower_email);
		List<Followers> followers = followerRepository.findByFollowerId(user_id);
		// Optional<Followers> exists = findByFollowerIdAndUserId(int followerId, int userId);
		if (!foundUser.isPresent()) {
			throw new NotFoundException(UserConstants.userNotExists);
		}
		if (follower == null) {
			throw new NotAUserException(UserConstants.followerNotUser);
		} 
			else if (!followers.isEmpty()) {
			throw new AlreadyExistsException(UserConstants.alreadyFollowing);
		} 
			else {
			Followers existingFollower = new Followers(follower_email, userEmail);
			existingFollower.setUser(foundUser.get());
			return followerRepository.save(existingFollower);
		}
	}
	
//	public Followers followUser(Followers followerss) {
//		int user_id = followerss.getUser().getUser_id();
//		System.out.println(user_id);
//		String user_email = followerss.getUser_email();
//		System.out.println(user_email);
//		String follower__email= followerss.getFollower__email();
//		System.out.println(follower__email);
//		Optional<User> foundUser = userRepository.findByUserIdAndEmail(user_id, user_email);
//		System.out.println(foundUser.get());
//		User follower = userRepository.findByEmail(follower__email);
//		System.out.println(follower);
//		List<Followers> followers = followerRepository.findByFollowerId(user_id);
//		System.out.println(followers);
//		if (!foundUser.isPresent()) {
//			throw new NotFoundException(UserConstants.userNotExists);
//		}
//		if (follower == null) {
//			throw new NotAUserException(UserConstants.followerNotUser);
//		} 
//			else if (!followers.isEmpty()) {
//			throw new AlreadyExistsException(UserConstants.alreadyFollowing);
//		} 
//			else {
//			Followers existingFollower = new Followers(follower__email, user_email);
//			existingFollower.setUser(foundUser.get());
//			return followerRepository.save(existingFollower);
//		}
//	}

	/**
	 * Unfollow a user
	 */
	@Override
	public void unFollowUser(int follower_id, int user_id) {
		Optional<User> existingUser = userRepository.findById(user_id);
		if (!existingUser.isPresent()) {
			throw new NotFoundException(UserConstants.userNotExists);
		}
		Optional<Followers> follower = followerRepository.findByFollowerIdAndUserId(follower_id, user_id);
		if (!follower.isPresent()) {
			throw new NotAUserException(UserConstants.followerNotUser);
		} else {
			followerRepository.deleteById(follower.get().getFollower_id());
		}
	}
	
	/**
	 * List of followers
	 */
	@Override
	public List<Followers> getAllFollowers() {
		return followerRepository.findAll();
	}

}
