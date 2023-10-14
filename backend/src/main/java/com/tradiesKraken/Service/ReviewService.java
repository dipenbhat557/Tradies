package com.tradiesKraken.Service;

import java.util.List;

import com.tradiesKraken.ModelDto.ReviewDto;

public interface ReviewService {

    public ReviewDto create(ReviewDto reviewDto);

    public ReviewDto viewById(int reviewId);

    public List<ReviewDto> viewAll();

    public void delete(int reviewId);

    public List<ReviewDto> viewByUser(String userId);
}
