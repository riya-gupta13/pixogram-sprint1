package com.cpg.pixogramspring.services.Impl;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpg.pixogramspring.constants.UserConstants;
import com.cpg.pixogramspring.models.Comment;
import com.cpg.pixogramspring.models.Content;
import com.cpg.pixogramspring.models.Followers;
import com.cpg.pixogramspring.models.Role;
import com.cpg.pixogramspring.models.User;
import com.cpg.pixogramspring.exceptions.AlreadyExistsException;
import com.cpg.pixogramspring.exceptions.NotFoundException;
import com.cpg.pixogramspring.exceptions.ValidationException;
import com.cpg.pixogramspring.repositories.UserRepository;
import com.cpg.pixogramspring.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	/**
	 * Adding a user
	 */
	@Override
	public User addUser(User user) throws ValidationException {
		final String passwordpattern = "^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[@#$%^&+=])"
				+ "(?=\\S+$).{8,20}$";
		final String emailpattern = "^(.+)@(.+)$";
		String pswrd = user.getPassword();
		String email = user.getEmail();
		if (email.matches(emailpattern)) {
			if (pswrd.matches(passwordpattern)) {
				User existingUser = userRepository.findByEmail(user.getEmail());
				if (existingUser != null) {
					throw new AlreadyExistsException(UserConstants.userAlreadyExists);
				}
				Role role = user.getRole();
				Role existingRole = userRepository.findRole(user.getRole().getRolename());
				if (existingRole.getRolename().equals(role.getRolename())) {
					user.setRole(existingRole);
				}
				userRepository.save(user);
			} else {
				throw new ValidationException(UserConstants.passwordValidation);
			}
		} else {
			throw new ValidationException(UserConstants.emailValidation);
		}
		return user;
	}

	/**
	 * Getting all users
	 */
	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	/**
	 * Deleting a user
	 */
	@Override
	public void deleteUser(int user_id) {
		Optional<User> existingUser = userRepository.findById(user_id);
		if (!existingUser.isPresent()) {
			throw new NotFoundException(UserConstants.userNotExists);
		} else {
			userRepository.deleteById(user_id);
		}
	}

	/**
	 * Signing in as a user
	 */
	@Override
	public User loginUser(User user) {
		String email = user.getEmail();
		String password = user.getPassword();
		return userRepository.findByEmailAndPassword(email, password);
	}

	@Override
	public User getUserById(int user_id) {
		Optional<User> user = userRepository.findByUserId(user_id);
		if (user.isPresent()) {
			return user.get();
		} else {
			throw new NotFoundException(UserConstants.userNotExists);
		}

	}

	/**
	 * Finding user by email
	 */
	@Override
	public User getUserByEmail(String email) {
		User user = userRepository.findByEmail(email);
		if (user != null) {
			return user;
		} else {
			throw new NotFoundException(UserConstants.userNotExists);
		}
	}

	/**
	 * Making changes as a user in your details
	 */
	@Override
	public User updateUser(User user) {
		Optional<User> existingUser = userRepository.findByUserId(user.getUser_id());
		if (existingUser != null) {
			Role role = user.getRole();
			Role existingRole = userRepository.findRole(user.getRole().getRolename());
			if (existingRole.getRolename().equals(role.getRolename())) {
				user.setRole(existingRole);
			}
			return userRepository.save(user);
		} else {
			throw new NotFoundException(UserConstants.userNotExists);
		}

	}

	/**
	 * Finding all the contents specific to a user
	 */
	@Override
	@Transactional
	public List<Content> retrieveContent(int user_id) {
		Optional<User> optionalUser = userRepository.findById(user_id);
		if (!optionalUser.isPresent()) {
			throw new NotFoundException(UserConstants.userNotExists);
		}
		return optionalUser.get().getContents();
	}

	/**
	 * Finding all the comments specific to a user
	 */
	@Override
	@Transactional
	public List<Comment> retrieveComment(int user_id) {
		Optional<User> optionalUser = userRepository.findByUserId(user_id);
		List<Content> contents = optionalUser.get().getContents();
		if (!optionalUser.isPresent()) {
			throw new NotFoundException(UserConstants.userNotExists);
		} else {
			for (Content content : contents) {
				return content.getComment();
			}
		}
		return null;
	}

	/**
	 * Finding all the followers specific to a user
	 */
	@Override
	@Transactional
	public List<Followers> retrieveFollowers(int user_id) {
		Optional<User> optionalUser = userRepository.findById(user_id);
		if (!optionalUser.isPresent()) {
			throw new NotFoundException(UserConstants.userNotExists);
		} else {
			return optionalUser.get().getFollowers();
		}
	}
}