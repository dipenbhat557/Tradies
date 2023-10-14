package com.tradiesKraken.Payload;

import lombok.Data;

@Data
public class ReviewRequest {

    private String description;

    private int rating;

    private int serviceReqId;

}
