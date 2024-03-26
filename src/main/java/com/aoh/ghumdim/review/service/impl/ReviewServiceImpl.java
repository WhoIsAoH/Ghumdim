package com.aoh.ghumdim.review.service.impl;

import com.aoh.ghumdim.places.repo.DestinationRepository;
import com.aoh.ghumdim.review.dto.ReviewDto;
import com.aoh.ghumdim.review.entity.Review;
import com.aoh.ghumdim.review.repository.ReviewRepository;
import com.aoh.ghumdim.review.service.ReviewService;
import com.aoh.ghumdim.security.repo.UserRepository;
import com.aoh.ghumdim.shared.MessageConstant;
import com.aoh.ghumdim.shared.UserResponse;
import com.aoh.ghumdim.shared.exception.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final DestinationRepository destinationRepository;
    private final UserRepository userRepository;

    public UserResponse createReview(ReviewDto reviewDto){
        Review review = new Review();
        review.setReviewDetail(reviewDto.getReviewDetail());
        review.setUser(userRepository.findById(reviewDto.getUser()).orElseThrow(UserNotFoundException::new));
        review.setDestinations(destinationRepository.findById(reviewDto.getDestination()).orElseThrow(UserNotFoundException::new));
        reviewRepository.save(review);
        return new UserResponse(MessageConstant.SAVED_SUCCESSFULLY);
    }

    public List<Review> getAllReview(){
        return reviewRepository.findAll();
    }



}
