package com.aoh.ghumdim.review.repository;

import com.aoh.ghumdim.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

}
