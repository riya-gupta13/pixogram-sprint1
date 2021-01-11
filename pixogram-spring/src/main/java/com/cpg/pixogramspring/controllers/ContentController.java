package com.cpg.pixogramspring.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cpg.pixogramspring.constants.UserConstants;
import com.cpg.pixogramspring.models.Comment;
import com.cpg.pixogramspring.models.Content;
import com.cpg.pixogramspring.models.User;
import com.cpg.pixogramspring.services.CommentService;
import com.cpg.pixogramspring.services.ContentService;
import com.cpg.pixogramspring.services.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping("/api")
@Api(value = "Content", tags = { "ContentAPI" })
public class ContentController {

	@Autowired
	private UserService userService;
	@Autowired
	private ContentService contentService;
	@Autowired
	private CommentService commentService;

	/**
	 * This method is only for user For adding images/videos in user's account
	 * 
	 * @param file
	 * @param caption
	 * @param user_id
	 * @return Response status
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	@PostMapping("/upload")
	@ApiOperation(value = "Uploading a file", notes = "Add the file and provide a caption", response = Content.class)
	public ResponseEntity<String> uploadFile(
			@ApiParam(value = "Select a file you want to upload", required = true) @RequestParam("file") MultipartFile file,
			@ApiParam(value = "Caption for file you are uploading", required = true) @RequestParam("caption") String caption,
			@ApiParam(value = "ID value for the user you want to upload for", required = true) @RequestParam("user_id") int user_id)
			throws IllegalStateException, IOException {
		Content content = contentService.uploadFile(file, caption, user_id);
		if (content != null) {
			return new ResponseEntity<>(UserConstants.added, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(UserConstants.contentNotExists, HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * This method is only for user Searching a particular image/video you uploaded
	 * 
	 * @param content_id
	 * @return Content
	 */
	@GetMapping("/upload/{content_id}")
	@ApiOperation(value = "Find a file by Id", notes = "Provide an id to find file", response = Content.class)
	public ResponseEntity<Content> findContent(
			@ApiParam(value = "ID value for the content you want to retrieve", required = true) @PathVariable("content_id") int content_id) {
		ResponseEntity<Content> response = null;
		Content content = contentService.findContent(content_id);
		if (content != null) {
			response = new ResponseEntity<>(content, HttpStatus.OK);
		} else {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}

	/**
	 * This method is only for admin To find all the contents
	 * 
	 * @return contents
	 */
	@GetMapping("/uploadsall")
	@ApiOperation(value = "View whole content", response = Content.class)
	public ResponseEntity<List<Content>> allContent() {
		List<Content> contents = contentService.allContent();
		if (!contents.isEmpty()) {
			return new ResponseEntity<>(contents, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * This method is only for user To delete a particular image/video from your
	 * account
	 * 
	 * @param content_id
	 * @return Response Status
	 */
	@DeleteMapping("/uploaddel/{content_id}")
	@ApiOperation(value = "Deleting a file", notes = "Provide an id to delete file", response = Content.class)
	public Message deleteContent(
			@ApiParam(value = "ID value for the content you want to delete", required = true) @PathVariable("content_id") int content_id) {
		contentService.deleteContent(content_id);
		Message message = new Message(UserConstants.deleted);
		List<Content> contents=contentService.allContent();
		message.setContents(contents);
		return message;	}

//....................................................................................................................//
//.........................................USER METHODS ON CONTENTS...................................................//

	/**
	 * This method is only for user adding comments to the contents uploaded
	 * 
	 * @param content_id
	 * @param user_id
	 * @param comment
	 * @return Response Status
	 */
	@PostMapping("/comment")
	@ApiOperation(value = "Adding Comment", notes = "Commenting on images and videos", response = Content.class)
	public ResponseEntity<String> addComment(
			@ApiParam(value = "ID value for the content you want to add comment", required = true) @RequestParam("content_id") int content_id,
			@ApiParam(value = "ID value for the user you want to add comment", required = true) @RequestParam("user_id") int user_id,
			@ApiParam(value = "String value the comment you want to add", required = true) @RequestParam("comment") String comment) {
		Content content = contentService.addComment(user_id, content_id, comment);
		if (content != null) {
			return new ResponseEntity<>(UserConstants.added, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(UserConstants.cannotupdate, HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * This method is only for user Finding a particular comment
	 * 
	 * @param comment_id
	 * @return Response Status
	 */
	@DeleteMapping("/commentdel/{comment_id}")
	@ApiOperation(value = "Deleting a file", notes = "Provide an id to delete file", response = Comment.class)
	public Message deleteComment(
			@ApiParam(value = "ID value for the comment you want to delete", required = true) @PathVariable("comment_id") int comment_id) {
		commentService.deleteComment(comment_id);
		Message message = new Message(UserConstants.deleted);
		List<Comment> comments=commentService.getAllComments();
		message.setComments(comments);
		return message;
	}

	/**
	 * This method is only for user Finding a particular comment
	 * 
	 * @param comment_id
	 * @return Comment
	 */
	@GetMapping("/comment/{comment_id}")
	@ApiOperation(value = "Finding comment by id", notes = "Provide an id to find comment", response = User.class)
	public ResponseEntity<Comment> findCommentById(
			@ApiParam(value = "ID value for the comment you want to retrieve", required = true) @PathVariable("comment_id") int comment_id) {
		ResponseEntity<Comment> response = null;
		Comment existingComment = commentService.getComment(comment_id);
		if (existingComment != null) {
			response = new ResponseEntity<>(existingComment, HttpStatus.OK);
		} else {
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}

	/**
	 * This method is only for user For adding likes to images/videos uploaded
	 * 
	 * @param user_id
	 * @param content_id
	 * @return Response status
	 */
	@PostMapping("/like")
	@ApiOperation(value = "Adding Likes", notes = "Liking the images and videos", response = Content.class)
	public ResponseEntity<String> addLike(
			@ApiParam(value = "ID value for the user you want to delete", required = true) @RequestParam("user_id") int user_id,
			@ApiParam(value = "ID value for the content you want to delete", required = true) @RequestParam("content_id") int content_id) {
		Content content = contentService.addLikes(content_id, user_id);
		if (content != null) {
			return new ResponseEntity<>(UserConstants.added, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(UserConstants.cannotupdate, HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * This method is only for user For adding dislikes to images/videos uploaded
	 * 
	 * @param user_id
	 * @param content_id
	 * @return Response status
	 */
	@PostMapping("/dislike")
	@ApiOperation(value = "Adding Dislikes", notes = "Disliking the images and videos", response = Content.class)
	public ResponseEntity<String> addDislike(
			@ApiParam(value = "ID value for the user you want to delete", required = true) @RequestParam("user_id") int user_id,
			@ApiParam(value = "ID value for the user you want to delete", required = true) @RequestParam("content_id") int content_id) {
		Content content = contentService.addDislikes(content_id, user_id);
		if (content != null) {
			return new ResponseEntity<>(UserConstants.added, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(UserConstants.cannotupdate, HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * This method is for user and admin To get track of contents for a specific
	 * user
	 * 
	 * @param user_id
	 * @return List of Content
	 */
	@GetMapping("/trackcontents")
	@ApiOperation(value = "User Content", notes = "Get a specific user's content", response = Content.class)
	public ResponseEntity<List<Content>> trackContent(
			@ApiParam(value = "ID value of user", required = true) @RequestParam("user_id") int user_id) {
		List<Content> contents = userService.retrieveContent(user_id);
		if (!contents.isEmpty()) {
			return new ResponseEntity<>(contents, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * This method is for user and admin both To find all the comments of particular
	 * user
	 * 
	 * @param user_id
	 * @return List of Comments
	 */
	@GetMapping("/trackcomments")
	@ApiOperation(value = "Content Comments", notes = "Get a specific user's comments on content", response = Comment.class)
	public ResponseEntity<List<Comment>> getComments(
			@ApiParam(value = "ID value of the user you want to track", required = true) @RequestParam("user_id") int user_id) {
		List<Comment> comments = userService.retrieveComment(user_id);
		if (!comments.isEmpty()) {
			return new ResponseEntity<>(comments, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
