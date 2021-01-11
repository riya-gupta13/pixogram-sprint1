package com.cpg.pixogramspring.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cpg.pixogramspring.models.Followers;

@Repository
public interface FollowerRepository extends JpaRepository<Followers, Integer> {

	/**
	 * To find follower by passing email
	 * 
	 * @param follower_email
	 * @return Followers
	 */
	@Query("select f from Followers f where f.follower__email=?1")
	Optional<Followers> findByEmail(String follower_email);

	/**
	 * To find a Follower by passing followerId and userId
	 * 
	 * @param followerId
	 * @param userId
	 * @return Followers
	 */
	@Query(value = "select * from followers where follower_id=:followerId and user_id=:userId", nativeQuery = true)
	Optional<Followers> findByFollowerIdAndUserId(int followerId, int userId);

	/**
	 * To find List of followers for a specific user
	 * 
	 * @param user_id
	 * @return List of followers
	 */
	@Query(value = "select * from followers where user_id=:user_id", nativeQuery = true)
	List<Followers> findByFollowerId(int user_id);

}
