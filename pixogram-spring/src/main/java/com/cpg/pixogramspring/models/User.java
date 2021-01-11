package com.cpg.pixogramspring.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Details about the User")
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@ApiModelProperty(notes = "The unique Id of user")
	private int user_id;

	@ApiModelProperty(notes = "The username of user")
	private String username;

	@Pattern(regexp = "^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[@#$%^&+=])"
			+ "(?=\\S+$).{8,20}$", message = "length must be 8 or above")
	@ApiModelProperty(notes = "Password of user")
	private String password;

	@ApiModelProperty(notes = "The email Id of of user")
	@Pattern(regexp = "^(.+)@(.+)$", message = "provide correct email")
	private String email;

	@ApiModelProperty(notes = "The gender of user")
	private String gender;

	@ApiModelProperty(notes = "The state which user belongs")
	private String state;

	@ApiModelProperty(notes = "Give some info about you or your thoughts")
	private String bio;

	@ApiModelProperty(notes = "The role of use as (admin/General user)")
	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH })
	@JoinColumn(name = "ur_id", referencedColumnName = "role_id")
	private Role role;

	@ApiModelProperty(notes = "List of contents of a user")
	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Content> contents;

	@ApiModelProperty(notes = "List of Followers of a user")
	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Followers> followers;

	public User() {
		super();
	}

	public User(User user) {
		super();
		this.user_id = user.user_id;
		this.username = user.username;
		this.password = user.password;
		this.email = user.email;
		this.gender = user.gender;
		this.state = user.state;
		this.bio = user.bio;
		this.role = user.role;
	}

	public User(int user_id, String username, String password, String email, String gender, String state, String bio,
			Role role) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.gender = gender;
		this.state = state;
		this.bio = bio;
		this.role = role;
	}

	public User(String username, String password, String email, String gender, String state, String bio, Role role) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.gender = gender;
		this.state = state;
		this.bio = bio;
		this.role = role;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public List<Content> getContents() {
		return contents;
	}

	public void setContents(List<Content> contents) {
		this.contents = contents;
	}

	public List<Followers> getFollowers() {
		return followers;
	}

	public void setFollowers(List<Followers> followers) {
		this.followers = followers;
	}

	@Override
	public String toString() {
		return "User [id=" + user_id + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", gender=" + gender + ", state=" + state + ", bio=" + bio + ", role=" + role + "]";
	}

}
