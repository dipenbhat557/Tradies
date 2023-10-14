package com.tradiesKraken.Service;

import org.springframework.web.multipart.MultipartFile;

public interface FileUploadService {

    public String uploadImage(String path, MultipartFile file);
}
