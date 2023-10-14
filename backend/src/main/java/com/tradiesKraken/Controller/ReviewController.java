package com.tradiesKraken.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradiesKraken.ModelDto.ReviewDto;
import com.tradiesKraken.Payload.ReviewRequest;
import com.tradiesKraken.ServiceImpl.ReviewServiceImpl;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewServiceImpl reviewService;

    @PostMapping
    public ResponseEntity<ReviewDto> create(@RequestBody ReviewRequest reviewRequest) {

        ReviewDto reviewDto = this.reviewService.create(reviewRequest);

        return new ResponseEntity<ReviewDto>(reviewDto, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ReviewDto>> viewAll() {
        return new ResponseEntity<List<ReviewDto>>(this.reviewService.viewAll(), HttpStatus.OK);
    }

    @GetMapping("/{reviewId}")
    public ResponseEntity<ReviewDto> viewById(@PathVariable int reviewId) {
        return new ResponseEntity<ReviewDto>(this.reviewService.viewById(reviewId), HttpStatus.OK);

    }

    @DeleteMapping("/{reviewId}")
    public ResponseEntity<String> delete(@PathVariable int reviewId) {
        return new ResponseEntity<String>("Successfully deleted...", HttpStatus.OK);
    }

    @GetMapping("/{userId}/user")
    public ResponseEntity<List<ReviewDto>> viewByUser(@PathVariable String userId) {
        return new ResponseEntity<List<ReviewDto>>(this.reviewService.viewByUser(userId), HttpStatus.OK);
    }

}
