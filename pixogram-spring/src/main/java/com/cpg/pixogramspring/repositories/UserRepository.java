package com.cpg.pixogramspring.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cpg.pixogramspring.models.Role;
import com.cpg.pixogramspring.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	/**
	 * To find user by email
	 * 
	 * @param email
	 * @return User
	 */
	User findByEmail(String email);

	/**
	 * To find user by userId
	 * 
	 * @param user_id
	 * @return User
	 */
	@Query("select u from User u where u.user_id=?1")
	Optional<User> findByUserId(int user_id);

	/**
	 * To find user by email and password
	 * 
	 * @param email
	 * @param password
	 * @return User
	 */
	User findByEmailAndPassword(String email, String password);

	/**
	 * To find User by UserId and Email
	 * 
	 * @param user_id
	 * @param email
	 * @return User
	 */
	@Query(value = "select * from User where user_id=:user_id and email=:email", nativeQuery = true)
	Optional<User> findByUserIdAndEmail(int user_id, String email);

	/**
	 * To find he role of the user
	 * 
	 * @param rolename
	 * @return Role
	 */
	@Query("FROM Role r where r.rolename=?1")
	Role findRole(String rolename);

}
