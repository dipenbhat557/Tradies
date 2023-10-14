package com.tradiesKraken.Payload;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tradiesKraken.Model.Category;
import com.tradiesKraken.Model.Location;
import com.tradiesKraken.Model.RefreshToken;
import com.tradiesKraken.Model.Review;
import com.tradiesKraken.Model.ServiceReq;
import com.tradiesKraken.Model.SubCategory;
import com.tradiesKraken.Model.User;
import com.tradiesKraken.Model.Work;
import com.tradiesKraken.ModelDto.CategoryDto;
import com.tradiesKraken.ModelDto.LocationDto;
import com.tradiesKraken.ModelDto.RefreshTokenDto;
import com.tradiesKraken.ModelDto.ReviewDto;
import com.tradiesKraken.ModelDto.ServiceReqDto;
import com.tradiesKraken.ModelDto.SubCategoryDto;
import com.tradiesKraken.ModelDto.UserDto;
import com.tradiesKraken.ModelDto.WorkDto;

@Component
public class ModelToDto {

    @Autowired
    public ModelMapper modelMapper;

    public CategoryDto category(Category category) {
        CategoryDto categoryDto = new CategoryDto();

        categoryDto.setCategoryId(category.getCategoryId());
        categoryDto.setTitle(category.getTitle());
        categoryDto.setCategoryImg(category.getCategoryImg());

        List<SubCategory> subCategories = category.getSubCategories();
        List<Integer> subCategoryIds = subCategories.stream()
                .map(subCategory -> subCategory.getSubCategoryId())
                .collect(Collectors.toList());

        categoryDto.setSubCategoryIds(subCategoryIds);

        return categoryDto;
    }

    public LocationDto location(Location location) {
        LocationDto locationDto = new LocationDto();

        locationDto.setLocationId(location.getLocationId());
        locationDto.setLongitude(location.getLongitude());
        locationDto.setLatitude(location.getLatitude());
        locationDto.setUserIds(location.getUsers().stream().map(user -> user.getUserId()).collect(Collectors.toList()));
        locationDto.setServiceReqIds(
                location.getServices().stream().map(service -> service.getServiceId()).collect(Collectors.toList()));

        return locationDto;
    }

    public RefreshTokenDto refreshToken(RefreshToken refreshToken) {
        RefreshTokenDto refreshTokenDto = new RefreshTokenDto();
        refreshTokenDto.setTokenId(refreshToken.getTokenId());
        refreshTokenDto.setRefreshToken(refreshToken.getRefreshToken());
        refreshTokenDto.setExpiry(refreshToken.getExpiry());
        refreshTokenDto.setUserId(refreshToken.getUser().getUserId());

        return refreshTokenDto;
    }

    public ReviewDto review(Review review) {
        ReviewDto reviewDto = new ReviewDto();

        reviewDto.setReviewId(review.getReviewId());
        reviewDto.setDescription(review.getDescription());
        reviewDto.setRating(review.getRating());
        reviewDto.setUserId(review.getUser().getUserId());
        reviewDto.setServiceReqId(review.getServiceReq().getServiceId());

        return reviewDto;
    }

    public ServiceReqDto serviceReq(ServiceReq serviceReq) {
        ServiceReqDto serviceReqDto = new ServiceReqDto();

        serviceReqDto.setServiceId(serviceReq.getServiceId());
        serviceReqDto.setStatus(serviceReq.getStatus());
        serviceReqDto.setDatetime(serviceReq.getDatetime());
        serviceReqDto.setLocation("Yet to be decided");
        serviceReqDto.setWorkId(serviceReq.getWork().getWorkId());
        serviceReqDto.setReqUserId(serviceReq.getReqUser().getUserId());
        if (serviceReq.getAccepterUser() != null) {
            serviceReqDto.setAccepterUserId(serviceReq.getAccepterUser().getUserId());
        }

        return serviceReqDto;
    }

    public SubCategoryDto subCategory(SubCategory subCategory) {
        SubCategoryDto subCategoryDto = new SubCategoryDto();

        subCategoryDto.setSubCategoryId(subCategory.getSubCategoryId());
        subCategoryDto.setTitle(subCategory.getTitle());
        subCategoryDto.setSubCategoryImg(subCategory.getSubCategoryImg());
        subCategoryDto
                .setWorkIds(subCategory.getWorks().stream().map(work -> work.getWorkId()).collect(Collectors.toList()));
        subCategoryDto.setCategoryId(subCategory.getCategory().getCategoryId());

        return subCategoryDto;
    }

    public UserDto user(User user) {
        UserDto userDto = new UserDto();

        userDto.setUserId(user.getUserId());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setPhone(user.getPhone());
        userDto.setImageUrl(user.getImageUrl());
        userDto.setCreatedAt(user.getCreatedAt());
        userDto.setAadharNo(user.getAadharNo());
        userDto.setActive(user.isActive());
        userDto.setRole(user.getRole());
        userDto.setRating(user.getRating());
        userDto.setNoOfRatings(user.getNoOfRatings());
        userDto.setLocation("yet to be done");

        return userDto;
    }

    public WorkDto work(Work work) {
        WorkDto workDto = new WorkDto();

        workDto.setWorkId(work.getWorkId());
        workDto.setTitle(work.getTitle());
        workDto.setWorkImg(work.getWorkImg());
        workDto.setSubCategoryId(work.getSubCategory().getSubCategoryId());
        workDto.setServiceReqIds(
                work.getServiceReqs().stream().map(req -> req.getServiceId()).collect(Collectors.toList()));

        return workDto;
    }

}
