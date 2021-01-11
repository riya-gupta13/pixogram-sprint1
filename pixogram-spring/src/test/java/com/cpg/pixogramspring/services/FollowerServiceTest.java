package com.cpg.pixogramspring.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

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

import com.cpg.pixogramspring.models.Followers;
import com.cpg.pixogramspring.models.Role;
import com.cpg.pixogramspring.models.User;

@RunWith(SpringRunner.class)
@TestInstance(Lifecycle.PER_CLASS)
@SpringBootTest
class FollowerServiceTest {

	User user;
	Role role;
	Followers followers;

	@MockBean
	FollowerService followerService;

	@SuppressWarnings("deprecation")
	@BeforeAll
	public void init() {
		MockitoAnnotations.initMocks(this);
	}

	@BeforeEach
	void setUp() throws Exception {
		role = new Role("Admin");
		user = new User(1, "riyaa", "Riya@123", "riya@gmail.com", "female", "Rajasthan", "Aries", role);
		followers = new Followers(5, "riya13@gmail.com", "riya@gmail.com");
	}

	@AfterEach
	void tearDown() throws Exception {
		user = null;
		role = null;
		followers = null;
	}

	/**
	 * Testing to follow a user
	 */
	// @Test
	void testFollowUser() {
		followerService.followUser(1, "riya@gmail.com", "riya13@gmail.com");
		verify(followerService, times(1)).followUser(1, "riya@gmail.com", "riya13@gmail.com");
		assertEquals("riya13@gmail.com", followers.getFollower__email());
	}

	/**
	 * Testing to unfollow a user
	 */
	// @Test
	void testUnFollowUser() {
		followerService.unFollowUser(5, 1);
		verify(followerService, times(1)).unFollowUser(5, 1);
		assertNotNull(followers);
	}

}
