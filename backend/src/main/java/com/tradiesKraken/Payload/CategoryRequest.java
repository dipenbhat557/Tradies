package com.tradiesKraken.Payload;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class CategoryRequest {

    private String title;

    private MultipartFile file;

}
