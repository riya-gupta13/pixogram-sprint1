package com.cpg.pixogramspring.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Details about the Content")
@Entity
public class Content {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@ApiModelProperty(notes = "The unique Id of content")
	private int content_id;

	@ApiModelProperty(notes = "The caption for uploaded image/video")
	private String caption;

	@ApiModelProperty(notes = "The name of the image/video you uploaded")
	private String filename;

	@ApiModelProperty(notes = "The type(image/video) uploaded")
	private String filetype;

	@ApiModelProperty(notes = "Like user's content")
	private int likes;

	@ApiModelProperty(notes = "Dislike user's content")
	private int dislikes;

	@ApiModelProperty(notes = "The info of the user who is uploading ")
	@JsonIgnore
	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH })
	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
	private User user;

	@ApiModelProperty(notes = "The comment for a particular content ")
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "content", referencedColumnName = "content_id")
	private List<Comment> comments;

	public Content() {
	}

	public Content(int content_id, String caption, String filename, String filetype, int likes, int dislikes) {
		super();
		this.content_id = content_id;
		this.caption = caption;
		this.filename = filename;
		this.filetype = filetype;
		this.likes = likes;
		this.dislikes = dislikes;
	}

	public Content(int content_id, String caption, String filename, String filetype, int likes, int dislikes,
			List<Comment> comments) {
		super();
		this.content_id = content_id;
		this.caption = caption;
		this.filename = filename;
		this.filetype = filetype;
		this.likes = likes;
		this.dislikes = dislikes;
		this.comments = comments;
	}

	public Content(String caption, String filename, String filetype) {
		super();
		this.caption = caption;
		this.filename = filename;
		this.filetype = filetype;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}

	public int getContent_id() {
		return content_id;
	}

	public void setContent_id(int content_id) {
		this.content_id = content_id;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getFiletype() {
		return filetype;
	}

	public void setFiletype(String filetype) {
		this.filetype = filetype;
	}

	public int getLike() {
		return likes;
	}

	public void setLike(int likes) {
		this.likes = likes;
	}

	public int getDislike() {
		return dislikes;
	}

	public void setDislike(int dislikes) {
		this.dislikes = dislikes;
	}

	public List<Comment> getComment() {
		return comments;
	}

	public void setComment(List<Comment> comments) {
		this.comments = comments;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Content [content_id=" + content_id + ", caption=" + caption + ", filename=" + filename + ", filetype="
				+ filetype + "]";
	}

}
