package com.tradiesKraken.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradiesKraken.Model.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

}
