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
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.cpg.pixogramspring.models.Comment;
import com.cpg.pixogramspring.models.Content;
import com.cpg.pixogramspring.models.Role;
import com.cpg.pixogramspring.models.User;

@RunWith(SpringRunner.class)
@TestInstance(Lifecycle.PER_CLASS)
@SpringBootTest
class ContentServiceTest {

	Content content;
	Comment comment;
	Role role;
	User user;

	@MockBean
	ContentService contentService;

	@SuppressWarnings("deprecation")
	@BeforeAll
	public void init() {
		MockitoAnnotations.initMocks(this);
	}

	@BeforeEach
	void setUp() throws Exception {
		role = new Role("Admin");
		user = new User(1, "riyaa", "Riya@123", "riya@gmail.com", "female", "Rajasthan", "Aries", role);
		content = new Content(12, "New for me  too", "180591926624900_image4.png", "image/png", 1, 1);
		comment = new Comment(10, "perfect", "riyaa");
	}

	@AfterEach
	void tearDown() throws Exception {
		role = null;
		user = null;
		content = null;
		comment = null;
	}

	/**
	 * Testing to find content
	 */
	// @Test
	void testFindContent() {
		contentService.findContent(12);
		verify(contentService, times(1)).findContent(12);
		assertEquals(12, content.getContent_id());
	}

	/**
	 * Testing to find all contents
	 */
	// @Test
	void testAllContent() {
		List<Content> contentList = new ArrayList<>();
		contentList.add(content);
		when(contentService.allContent()).thenReturn(contentList);
		contentService.allContent();
		verify(contentService, times(1)).allContent();
		assertEquals(1, contentList.size());
		assertNotNull(contentList);
	}

	/**
	 * Testing to deleting a content
	 */
	// @Test
	void testDeleteContent() {
		contentService.deleteContent(12);
		verify(contentService, times(1)).deleteContent(12);
		assertNotNull(content);
	}

	/**
	 * Testing to add comments
	 */
	 @Test
	void testAddComment() {
		List<Comment> comments = new ArrayList<>();
		contentService.addComment(1, 12, "perfect");
		verify(contentService, times(1)).addComment(1, 12, "perfect");
		content = new Content(12, "New for me  too", "180591926624900_image4.png", "image/png", 1, 1, comments);
		assertEquals(comments, content.getComment());
	}

	/**
	 * Testing to add likes
	 */
	// @Test
	void testAddLikes() {
		contentService.addLikes(12, 1);
		verify(contentService, times(1)).addLikes(12, 1);
		assertEquals(1, content.getLike());
	}

	/**
	 * Testing to add dislikes
	 */
	// @Test
	void testAddDislikes() {
		contentService.addDislikes(12, 1);
		verify(contentService, times(1)).addDislikes(12, 1);
		assertEquals(1, content.getDislike());
	}

}
