package com.cpg.pixogramspring.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Comments By User On Content")
@Entity
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@ApiModelProperty(notes = "The unique Id of comment")
	private int comment_id;

	@ApiModelProperty(notes = "The comment/message on content")
	private String comment;

	@ApiModelProperty(notes = "The email id of user")
	private String useremail;

	public Comment() {
		super();
	}

	public Comment(int comment_id, String comment, String useremail) {
		super();
		this.comment_id = comment_id;
		this.comment = comment;
		this.useremail = useremail;
	}

	public Comment(String comment, String useremail) {
		super();
		this.comment = comment;
		this.useremail = useremail;
	}

	public String getUseremail() {
		return useremail;
	}

	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}

	public int getComment_id() {
		return comment_id;
	}

	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "Comment [comment_id=" + comment_id + ", comment=" + comment + ", useremail=" + useremail + "]";
	}

}
