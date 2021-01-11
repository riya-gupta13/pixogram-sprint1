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

import com.cpg.pixogramspring.models.Comment;
import com.cpg.pixogramspring.models.Role;
import com.cpg.pixogramspring.models.User;

@RunWith(SpringRunner.class)
@TestInstance(Lifecycle.PER_CLASS)
@SpringBootTest
class CommentServiceTest {

	Comment comment;
	Role role;
	User user;

	@MockBean
	CommentService commentService;

	@SuppressWarnings("deprecation")
	@BeforeAll
	public void init() {
		MockitoAnnotations.initMocks(this);
	}

	@BeforeEach
	void setUp() throws Exception {
		role = new Role("Admin");
		user = new User(1, "riyaa", "Riya@123", "riya@gmail.com", "female", "Rajasthan", "Aries", role);
		comment = new Comment(10, "perfect", "riyaa");
	}

	@AfterEach
	void tearDown() throws Exception {
		role = null;
		user = null;
		comment = null;
	}

	/**
	 * Testing to delete a comment
	 */
	// @Test
	void testDeleteComment() {
		commentService.deleteComment(10);
		verify(commentService, times(1)).deleteComment(10);
		assertNotNull(comment);
	}

	/**
	 * Testing to find comment by Id
	 */
	// @Test
	void testGetComment() {
		commentService.getComment(10);
		verify(commentService, times(1)).getComment(10);
		assertEquals("perfect", comment.getComment());
	}

}
