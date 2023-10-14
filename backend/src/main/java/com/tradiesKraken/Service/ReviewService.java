package com.tradiesKraken.Service;

import java.util.List;

import com.tradiesKraken.ModelDto.ReviewDto;
import com.tradiesKraken.Payload.ReviewRequest;

public interface ReviewService {

    public ReviewDto create(ReviewRequest reviewRequest);

    public ReviewDto viewById(int reviewId);

    public List<ReviewDto> viewAll();

    public void delete(int reviewId);

    public List<ReviewDto> viewByUser(String userId);
}
