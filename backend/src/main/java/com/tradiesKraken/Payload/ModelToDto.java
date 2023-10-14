package com.tradiesKraken.Payload;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.tradiesKraken.Model.Category;
import com.tradiesKraken.Model.RefreshToken;
import com.tradiesKraken.Model.User;
import com.tradiesKraken.Model.Work;
import com.tradiesKraken.ModelDto.CategoryDto;
import com.tradiesKraken.ModelDto.RefreshTokenDto;
import com.tradiesKraken.ModelDto.UserDto;

@Component
public class ModelToDto {

    @Autowired
    public ModelMapper modelMapper;

    public CategoryDto category(Category category) {
        CategoryDto categoryDto = new CategoryDto();

        categoryDto.setCategoryId(category.getCategoryId());
        categoryDto.setTitle(category.getTitle());
        categoryDto.setCategoryImg(category.getCategoryImg());

        List<Work> works = category.getWorks();
        List<Integer> workIds = works.stream()
                .map(work -> work.getWorkId())
                .collect(Collectors.toList());

        categoryDto.setWorkIds(workIds);

        return categoryDto;
    }

    public RefreshTokenDto refreshToken(RefreshToken refreshToken) {
        return null;
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
        userDto.setLocation("yet to be done");

        return userDto;
    }

}
