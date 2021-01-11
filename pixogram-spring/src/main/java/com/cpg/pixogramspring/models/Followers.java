package com.cpg.pixogramspring.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Follower's user have")
@Entity
public class Followers {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@ApiModelProperty(notes = "The Id value of follower")
	private int follower_id;

	@ApiModelProperty(notes = "The Email Id of follower")
	private String follower__email;

	@ApiModelProperty(notes = "The email Id of user u want to follow")
	private String user_email;

	@JsonIgnore
	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH })
	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
	@ApiModelProperty(notes = "Details about user")
	private User user;

	public Followers() {
		super();
	}
	
	public Followers(Followers followers) {
		super();
		this.follower_id = followers.follower_id;
		this.follower__email = followers.follower__email;
		this.user_email = followers.user_email;
		this.user= followers.user;
	}

	public Followers(int follower_id, String follower__email, String user_email) {
		super();
		this.follower_id = follower_id;
		this.follower__email = follower__email;
		this.user_email = user_email;
	}

	public Followers(String follower__email, String user_email) {
		super();
		this.follower__email = follower__email;
		this.user_email = user_email;
	}

	public int getFollower_id() {
		return follower_id;
	}

	public void setFollower_id(int follower_id) {
		this.follower_id = follower_id;
	}

	public String getFollower__email() {
		return follower__email;
	}

	public void setFollower__email(String follower__email) {
		this.follower__email = follower__email;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Followers [follower_id=" + follower_id + ", follower__email=" + follower__email + ", user_email="
				+ user_email + ", user=" + user + "]";
	}

}
