package com.tradiesKraken.ModelDto;

import java.util.Date;

import lombok.Data;

@Data
public class UserDto {

    private String userId;

    private String name;

    private String email;

    private String phone;

    private String imageUrl;

    private Date createdAt;

    private String aadharNo;

    private boolean active;

    private double rating;

    private int noOfRatings;

    private String role;

    private String location;

}
