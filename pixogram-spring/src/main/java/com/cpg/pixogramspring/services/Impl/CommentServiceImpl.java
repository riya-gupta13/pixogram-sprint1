package com.cpg.pixogramspring.services.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpg.pixogramspring.constants.UserConstants;
import com.cpg.pixogramspring.exceptions.NotFoundException;
import com.cpg.pixogramspring.models.Comment;
import com.cpg.pixogramspring.repositories.CommentRepository;
import com.cpg.pixogramspring.services.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	CommentRepository commentRepository;

	/**
	 * Deleting a particular comment
	 */
	@Override
	public void deleteComment(int comment_id) {
		Optional<Comment> comment = commentRepository.findById(comment_id);
		if (!comment.isPresent()) {
			throw new NotFoundException(UserConstants.commentNotExists);
		}
		commentRepository.deleteById(comment_id);
	}

	/**
	 * Finding a particular comment
	 */
	@Override
	public Comment getComment(int comment_id) {
		Optional<Comment> comment = commentRepository.findById(comment_id);
		if (comment.isPresent()) {
			return comment.get();
		} else {
			throw new NotFoundException(UserConstants.commentNotExists);
		}
	}
	
	@Override
	public List<Comment> getAllComments(){
		return commentRepository.findAll();
	}

}
