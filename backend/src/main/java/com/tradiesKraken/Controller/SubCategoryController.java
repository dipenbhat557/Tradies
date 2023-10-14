package com.tradiesKraken.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tradiesKraken.ModelDto.SubCategoryDto;
import com.tradiesKraken.Payload.SubCategoryRequest;
import com.tradiesKraken.ServiceImpl.FileUploadServiceImpl;
import com.tradiesKraken.ServiceImpl.SubCategoryImpl;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/sub/category")
public class SubCategoryController {

    @Autowired
    private SubCategoryImpl subCategoryService;

    @Autowired
    private FileUploadServiceImpl fileUploadService;

    private String path = "src/subCategory/images";

    @PostMapping("/{categoryId}")
    public ResponseEntity<SubCategoryDto> create(@Param("title") String title, @RequestBody MultipartFile file,
            @PathVariable int categoryId) {
        SubCategoryDto subCategoryDto = new SubCategoryDto();

        String fileName = this.fileUploadService.uploadImage(path, file);

        subCategoryDto.setCategoryId(categoryId);
        subCategoryDto.setTitle(title);
        subCategoryDto.setSubCategoryImg(fileName);

        return new ResponseEntity<SubCategoryDto>(this.subCategoryService.create(subCategoryDto), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<SubCategoryDto>> viewAll() {
        return new ResponseEntity<List<SubCategoryDto>>(this.subCategoryService.viewAll(), HttpStatus.OK);
    }

    @GetMapping("/{subCategoryId}")
    public ResponseEntity<SubCategoryDto> viewByid(@PathVariable int subCategoryId) {
        return new ResponseEntity<SubCategoryDto>(this.subCategoryService.viewById(subCategoryId), HttpStatus.OK);
    }

    @DeleteMapping("/{subCategoryId}")
    public ResponseEntity<String> delete(@PathVariable int subCategoryId) {
        return new ResponseEntity<String>("Successfully deleted....", HttpStatus.OK);
    }

}
