package com.tradiesKraken.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tradiesKraken.ModelDto.ReviewDto;
import com.tradiesKraken.Service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Override
    public ReviewDto create(ReviewDto reviewDto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'create'");
    }

    @Override
    public ReviewDto viewById(int reviewId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'viewById'");
    }

    @Override
    public List<ReviewDto> viewAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'viewAll'");
    }

    @Override
    public void delete(int reviewId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public List<ReviewDto> viewByUser(String userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'viewByUser'");
    }

}
