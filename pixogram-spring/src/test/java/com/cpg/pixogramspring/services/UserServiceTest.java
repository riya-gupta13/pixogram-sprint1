package com.cpg.pixogramspring.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cpg.pixogramspring.models.Comment;
import com.cpg.pixogramspring.models.Content;
import com.cpg.pixogramspring.models.Followers;
import com.cpg.pixogramspring.models.Role;
import com.cpg.pixogramspring.models.User;
import com.cpg.pixogramspring.repositories.UserRepository;

@RunWith(SpringRunner.class)
@TestInstance(Lifecycle.PER_CLASS)
@SpringBootTest
class UserServiceTest {

	Role role;
	User user;
	Content content;
	Followers followers;
	Comment comment;

	@MockBean
	UserService userService;

	@MockBean
	UserRepository userRepository;

	@SuppressWarnings("deprecation")
	@BeforeAll
	public void init() {
		MockitoAnnotations.initMocks(this);
	}

	@BeforeEach
	void setUp() throws Exception {
		role = new Role("Admin");
		user = new User(1, "riyaa", "Riya@123", "riya@gmail.com", "female", "Rajasthan", "Aries", role);
		content = new Content(12, "New for me  toohj", "180591926624900_image4.png", "image/png", 1, 1);
		comment = new Comment(10, "perfect", "riyaa");
		followers = new Followers(5, "riya13@gmail.com", "riya@gmail.com");

	}

	@AfterEach
	void tearDown() throws Exception {
		user = null;
		role = null;
		content = null;
		comment = null;
		followers = null;
	}

	/**
	 * Testing add user
	 */
	// @Test
	void testAddUser() {
		userService.addUser(user);
		verify(userService, times(1)).addUser(user);
		assertEquals("riya@gmail.com", user.getEmail());
		when(userRepository.save(user)).thenReturn(user);
		assertEquals(user, userService.addUser(user));
	}

	/**
	 * Testing to delete a user
	 */
	// @Test
	void testDeleteUser() {
		userService.deleteUser(2);
		verify(userService, times(1)).deleteUser(2);
		assertNotNull(user);
	}

	/**
	 * Testing to find all users
	 */
	// @Test
	void testGetAllUsers() {
		List<User> userList = new ArrayList<>();
		userList.add(user);
		when(userService.getAllUsers()).thenReturn(userList);
		userService.getAllUsers();
		verify(userService, times(1)).getAllUsers();
		assertEquals(1, userList.size());
		assertNotNull(userList);
	}

	/**
	 * Testing to logging in user
	 */
	// @Test
	void testLoginUser() {
		userService.loginUser(user);
		verify(userService, times(1)).loginUser(user);
		assertEquals("riya@gmail.com", user.getEmail());
		assertEquals("Riya@123", user.getPassword());
	}

	/**
	 * Testing to find user by Id
	 */
	// @Test
	void testGetUserById() {
		userService.getUserById(1);
		verify(userService, times(1)).getUserById(1);
		assertEquals(1, user.getUser_id());
		assertEquals("riya@gmail.com", user.getEmail());

	}

	/**
	 * Testing to find user By email
	 */
	// @Test
	void testGetUserByEmail() {
		userService.getUserByEmail("riya@gmail.com");
		verify(userService, times(1)).getUserByEmail("riya@gmail.com");
		assertEquals("riya@gmail.com", user.getEmail());
	}

	/**
	 * Testing for updating user
	 */
	// @Test
	void testUpdateUser() {
		user.setState("Punjab");
		userService.updateUser(user);
		verify(userService, times(1)).updateUser(user);
		assertEquals("Punjab", user.getState());
	}

	/**
	 * Testing to find all contents specific to a user
	 */
	// @Test
	void testRetrieveContent() {
		List<Content> contentList = new ArrayList<>();
		contentList.add(content);
		when(userService.retrieveContent(1)).thenReturn(contentList);
		userService.retrieveContent(1);
		verify(userService, times(1)).retrieveContent(1);
		assertEquals(1, contentList.size());
		assertNotNull(contentList);
	}

	/**
	 * Testing to find all followers specific to a user
	 */
	// @Test
	void testRetrieveFollowers() {
		List<Followers> follwersList = new ArrayList<>();
		follwersList.add(followers);
		when(userService.retrieveFollowers(1)).thenReturn(follwersList);
		userService.retrieveFollowers(1);
		verify(userService, times(1)).retrieveFollowers(1);
		assertEquals(1, follwersList.size());
		assertNotNull(follwersList);
	}

	/**
	 * Testing to find all comments specific to a user
	 */
	// @Test
	void testRetrieveComment() {
		List<Comment> commentList = new ArrayList<>();
		commentList.add(comment);
		when(userService.retrieveComment(1)).thenReturn(commentList);
		userService.retrieveComment(1);
		verify(userService, times(1)).retrieveComment(1);
		assertEquals(1, commentList.size());
		assertNotNull(commentList);
	}

}
