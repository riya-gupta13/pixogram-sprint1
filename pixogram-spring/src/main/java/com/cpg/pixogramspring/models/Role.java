package com.cpg.pixogramspring.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "Details about the Role")
@Entity
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@ApiModelProperty(notes = "The unique Id of role")
	int role_id;

	@ApiModelProperty(notes = "The rolename for user")
	String rolename;

	@OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
	private List<User> user;

	public Role() {

	}

	public Role(String rolename) {
		super();
		this.rolename = rolename;
	}

	public String getRolename() {
		return rolename;
	}

	public void setRolename(String rolename) {
		this.rolename = rolename;
	}

	@Override
	public String toString() {
		return "Role [id=" + role_id + ", rolename=" + rolename + "]";
	}

}
