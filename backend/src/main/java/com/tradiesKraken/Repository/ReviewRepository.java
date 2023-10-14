package com.tradiesKraken.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradiesKraken.Model.Review;
import com.tradiesKraken.Model.User;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    List<Review> findByUser(User user);
}
