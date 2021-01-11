package com.cpg.pixogramspring.services;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.cpg.pixogramspring.models.Content;

public interface ContentService {

	Content uploadFile(MultipartFile file, String caption, int user_id) throws IllegalStateException, IOException;

	Content findContent(int content_id);

	List<Content> allContent();

	void deleteContent(int content_id);

	Content addComment(int user_id, int content_id, String comment);

	Content addLikes(int content_id, int user_id);

	Content addDislikes(int content_id, int user_id);

}
