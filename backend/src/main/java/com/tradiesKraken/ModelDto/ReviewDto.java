package com.tradiesKraken.ModelDto;

import lombok.Data;

@Data
public class ReviewDto {

    private int reviewId;

    private String description;

    private int rating;

    private String userId;

    private int serviceReqId;

}
