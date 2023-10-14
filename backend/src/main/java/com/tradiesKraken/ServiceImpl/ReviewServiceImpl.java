package com.tradiesKraken.ServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradiesKraken.Exception.ResourceNotFoundException;
import com.tradiesKraken.Model.Review;
import com.tradiesKraken.Model.ServiceReq;
import com.tradiesKraken.Model.User;
import com.tradiesKraken.ModelDto.ReviewDto;
import com.tradiesKraken.Payload.ModelToDto;
import com.tradiesKraken.Payload.ReviewRequest;
import com.tradiesKraken.Repository.ReviewRepository;
import com.tradiesKraken.Repository.ServiceReqRepository;
import com.tradiesKraken.Repository.UserRepository;
import com.tradiesKraken.Service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ServiceReqRepository serviceReqRepository;

    @Autowired
    private ModelToDto modelToDto;

    @Override
    public ReviewDto create(ReviewRequest reviewRequest) {
        Review review = new Review();

        review.setDescription(reviewRequest.getDescription());
        review.setRating(reviewRequest.getRating());

        ServiceReq serviceReq = this.serviceReqRepository.findById(reviewRequest.getServiceReqId())
                .orElseThrow(() -> new ResourceNotFoundException("The expected service request is not found"));
        review.setServiceReq(serviceReq);

        User user = this.userRepository.findById(serviceReq.getAccepterUser().getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));

        user.setNoOfRatings(user.getNoOfRatings() + 1);
        user.setRating((user.getRating() + review.getRating()) / user.getNoOfRatings());

        this.userRepository.save(user);

        return this.modelToDto.review(review);

    }

    @Override
    public ReviewDto viewById(int reviewId) {
        Review review = this.reviewRepository.findById(reviewId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected review is not found"));
        return this.modelToDto.review(review);
    }

    @Override
    public List<ReviewDto> viewAll() {
        List<Review> reviews = this.reviewRepository.findAll();

        return reviews.stream().map(review -> this.modelToDto.review(review)).collect(Collectors.toList());
    }

    @Override
    public void delete(int reviewId) {
        this.reviewRepository.delete(this.reviewRepository.findById(reviewId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected review is not found")));
    }

    @Override
    public List<ReviewDto> viewByUser(String userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));
        List<Review> reviews = this.reviewRepository.findByUser(user);

        List<ReviewDto> reviewDtos = reviews.stream().map((review) -> this.modelToDto.review(review))
                .collect(Collectors.toList());

        return reviewDtos;
    }

}
