package com.cpg.pixogramspring.services;

import java.util.List;

import com.cpg.pixogramspring.models.Comment;
import com.cpg.pixogramspring.models.Content;
import com.cpg.pixogramspring.models.Followers;
import com.cpg.pixogramspring.models.User;

public interface UserService {

	User addUser(User user);

	void deleteUser(int user_id);

	List<User> getAllUsers();

	User loginUser(User user);

	User getUserById(int user_id);

	User getUserByEmail(String email);

	User updateUser(User user);

	List<Content> retrieveContent(int user_id);

	List<Followers> retrieveFollowers(int user_id);

	List<Comment> retrieveComment(int user_id);

}
