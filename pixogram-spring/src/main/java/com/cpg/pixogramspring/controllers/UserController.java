package com.cpg.pixogramspring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cpg.pixogramspring.constants.UserConstants;
import com.cpg.pixogramspring.models.Comment;
import com.cpg.pixogramspring.models.Content;
import com.cpg.pixogramspring.models.Followers;
import com.cpg.pixogramspring.models.User;
import com.cpg.pixogramspring.services.FollowerService;
import com.cpg.pixogramspring.services.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;


class Message{
	private String text;
	private List<User> users;
	private boolean auth;
	private List<Followers> followers;
	private List<Content> contents;
	private List<Comment> comments;
	
	
	public boolean isAuth() {
		return auth;
	}

	public void setAuth(boolean auth) {
		this.auth = auth;
	}

	public Message() {
		super();
	}

	public Message(String text) {
		super();
		this.text = text;
	}
	
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}

	public List<Followers> getFollowers() {
		return followers;
	}

	public void setFollowers(List<Followers> followers) {
		this.followers = followers;
	}

	public List<Content> getContents() {
		return contents;
	}

	public void setContents(List<Content> contents) {
		this.contents = contents;
	}
	
	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "Message [text=" + text + ", auth=" + auth + "]";
	}
	
}
@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/api")
@Api(value = "User", tags = { "UserAPI" })
public class UserController {

	@Autowired
	public FollowerService followerService;
	@Autowired
	private UserService userService;

	/**
	 * This method can be used by both admin and user Signing in as a user
	 * 
	 * @param user
	 * @return Response Status
	 */
	@PostMapping("/login")
	@ApiOperation(value = "User Login", notes = "Enter your Email and Password", response = User.class)
	public ResponseEntity<Message> loginUser(@RequestBody User user) {
		User registeredUser = userService.loginUser(user);
		Message msg= new Message();
		if (registeredUser != null) {
			msg.setAuth(true);
			msg.setText("Successfully Logged In");
			//msg.setUsers();
			return new ResponseEntity<>(msg, HttpStatus.OK);
			
		} else
			msg.setAuth(false);
			msg.setText("Un Successfull!!! Wrong email and password");
			return new ResponseEntity<>(msg, HttpStatus.OK);
	}

	/**
	 * This method is only for admin Finding a particular user by userId
	 * 
	 * @param user_id
	 * @return user
	 */
	@GetMapping("/users/{user_id}")
	@ApiOperation(value = "Finding user by id", notes = "Provide an id to find user", response = User.class)
	public ResponseEntity<User> findUserById(
			@ApiParam(value = "ID value for the user you want to retrieve", required = true) @PathVariable("user_id") int user_id) {
		ResponseEntity<User> response = null;
		User existingUser = userService.getUserById(user_id);
		if (existingUser != null) {
			response = new ResponseEntity<>(existingUser, HttpStatus.OK);
		} else {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}

	/**
	 * This method is only for admin Finding a particular user by email
	 * 
	 * @param email
	 * @return user
	 */
	@GetMapping("/users")
	@ApiOperation(value = "Finding user by email", notes = "Provide an email to find user", response = User.class)
	public ResponseEntity<User> findUserByEmail(
			@ApiParam(value = "Email value for the user you want to retrieve", required = true) @RequestParam("email") String email) {
		User existingUser = userService.getUserByEmail(email);
		if (existingUser == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(existingUser, HttpStatus.OK);
	}

	/**
	 * This method is only for admin To see All users
	 * 
	 * @return user
	 */
	@GetMapping("/userall")
	@ApiOperation(value = "All users", response = User.class)
	public ResponseEntity<List<User>> findAllUsers() {
		List<User> users = userService.getAllUsers();
		if (!users.isEmpty()) {
			return new ResponseEntity<>(users, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * This method is for admin and user both Adding a user by specifying its role
	 * 
	 * @param user
	 * @return Response Status
	 */
	@PostMapping("/useradd")
	@ApiOperation(value = "Adding user", notes = "Provide all attributes to add user", response = User.class)
	public ResponseEntity<Message> saveUser(@RequestBody User user) {
		User existingUser = userService.addUser(user);
		Message message = new Message();
		if (existingUser != null) {
			message.setText(UserConstants.added);
			message.setUsers(userService.getAllUsers());
			return new ResponseEntity<>(message, HttpStatus.CREATED);
		} else {
			message.setText(UserConstants.userAlreadyExists);
			return new ResponseEntity<>(message, HttpStatus.CONFLICT);
		}
	}

	/**
	 * This method is only for admin Deleting a user by userId
	 * 
	 * @param user_id
	 * @return Response Status
	 */
	@DeleteMapping("/userdel/{user_id}")
	@ApiOperation(value = "Deleting user", notes = "Provide id to delete user", response = User.class)
	public Message deleteUser(
			@ApiParam(value = "ID value for the user you want to delete", required = true) @PathVariable("user_id") int user_id) {
		userService.deleteUser(user_id);
		Message message = new Message(UserConstants.deleted);
		List<User> users=userService.getAllUsers();
		message.setUsers(users);
		return message;
		//return new ResponseEntity<>(UserConstants.deleted, HttpStatus.OK);
	}

	/**
	 * This method is for user and admin both Updating user, to make some changes in
	 * your personal account
	 * 
	 * @param user
	 * @return Response Status
	 */
	@PutMapping("/userupd")
	@ApiOperation(value = "Updating user", notes = "Change the attributes you want to user", response = User.class)
	public ResponseEntity<String> updateUser(@RequestBody User user) {
		User existingUser = userService.updateUser(user);
		if (existingUser != null) {
			return new ResponseEntity<>(UserConstants.updated, HttpStatus.CREATED);
		} else
			return new ResponseEntity<>(UserConstants.userNotExists, HttpStatus.NOT_FOUND);
	}

//....................................................................................................................//
//............................................USER METHODS............................................................//

	/**
	 * This method is only for user To follow a particular user
	 * 
	 * @param user_id
	 * @param follower_email
	 * @param email
	 * @return Followers
	 */
	@PostMapping("/follow")
	@ApiOperation(value = "Following", notes = "Following users", response = Followers.class)
//	public ResponseEntity<Followers> follow( @RequestBody Followers followers) {
////		String follower_email= followers.getFollower__email();
////		String email =followers.getUser_email();
////		int user_id= followers.getUser().getUser_id();
//		Followers follower = followerService.followUser(followers);
//		return new ResponseEntity<>(follower, HttpStatus.CREATED);
//	}
	public ResponseEntity<Followers> follow(
			@ApiParam(value = "ID value for the user you want to follow", required = true) @RequestParam("user_id") int user_id,
			@ApiParam(value = "Email id of you", required = true) @RequestParam("follower__email") String follower__email,
			@ApiParam(value = "Email id of user", required = true) @RequestParam("user_email") String user_email) {
		Followers follower = followerService.followUser(user_id, user_email, follower__email);
		return new ResponseEntity<>(follower, HttpStatus.CREATED);
	}

	/**
	 * This method is only for user To unfollow a particular user
	 * 
	 * @param user_id     userId
	 * @param follower_id followerId
	 * @return Response status
	 */
	@DeleteMapping("/unfollow")
	@ApiOperation(value = "Un Following", notes = "Un Following users", response = Followers.class)
	public Message unfollow(
			@ApiParam(value = "ID value for the user you want to follow", required = true) @RequestParam("user_id") int user_id,
			@ApiParam(value = "ID value of the follower", required = true) @RequestParam("follower_id") int follower_id) {
		followerService.unFollowUser(follower_id, user_id);
		Message message = new Message(UserConstants.unfollowing);
		List<Followers> followers=followerService.getAllFollowers();
		message.setFollowers(followers);
		return message;
		}
//	public ResponseEntity<String> unfollow(
//			@ApiParam(value = "ID value for the user you want to follow", required = true) @RequestParam("user_id") int user_id,
//			@ApiParam(value = "ID value of the follower", required = true) @RequestParam("follower_id") int follower_id) {
//		followerService.unFollowUser(follower_id, user_id);
//		return new ResponseEntity<>(UserConstants.unfollowing, HttpStatus.CREATED);
//	}

	/**
	 * This method is only for users To get all the followers of a particular user
	 * 
	 * @param user_id
	 * @return List of Followers
	 */
	@GetMapping("/trackfollowers")
	@ApiOperation(value = "User Content", notes = "Get a specific user's followers", response = Content.class)
	public ResponseEntity<List<Followers>> findFollowers(
			@ApiParam(value = "ID value of the user you want to track", required = true) @RequestParam("user_id") int user_id) {
		List<Followers> followers = userService.retrieveFollowers(user_id);
		if (!followers.isEmpty()) {
			return new ResponseEntity<>(followers, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
