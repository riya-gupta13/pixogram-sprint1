package com.cpg.pixogramspring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cpg.pixogramspring.models.Content;

@Repository
public interface ContentRepository extends JpaRepository<Content, Integer> {

	/**
	 * To find a content by its Id
	 * 
	 * @param content_id
	 * @return Content
	 */
	@Query("select c from Content c where c.content_id=?1")
	Content findContentById(int content_id);
}
