package com.cpg.pixogramspring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cpg.pixogramspring.models.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {

}