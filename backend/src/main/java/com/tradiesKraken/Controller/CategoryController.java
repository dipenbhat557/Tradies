package com.tradiesKraken.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradiesKraken.ModelDto.CategoryDto;
import com.tradiesKraken.Payload.CategoryRequest;
import com.tradiesKraken.ServiceImpl.CategoryServiceImpl;
import com.tradiesKraken.ServiceImpl.FileUploadServiceImpl;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryServiceImpl categoryService;

    @Autowired
    private FileUploadServiceImpl fileUploadService;

    private String path = "src/category/images";

    @PostMapping
    public ResponseEntity<CategoryDto> create(@RequestBody CategoryRequest categoryRequest) {
        CategoryDto categoryDto = new CategoryDto();

        String fileName = this.fileUploadService.uploadImage(path, categoryRequest.getFile());

        categoryDto.setTitle(categoryRequest.getTitle());
        categoryDto.setCategoryImg(fileName);

        return new ResponseEntity<CategoryDto>(this.categoryService.create(categoryDto), HttpStatus.CREATED);

    }

    @GetMapping("/")
    public ResponseEntity<List<CategoryDto>> viewAll() {
        return new ResponseEntity<List<CategoryDto>>(this.categoryService.viewAll(), HttpStatus.OK);
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<CategoryDto> viewById(@PathVariable int categoryId) {
        return new ResponseEntity<CategoryDto>(this.categoryService.viewById(categoryId), HttpStatus.OK);
    }

    @DeleteMapping("/{categoryId}")
    public ResponseEntity<String> delete(@PathVariable int categoryId) {
        this.categoryService.delete(categoryId);
        return new ResponseEntity<String>("Successfully deleted...", HttpStatus.OK);
    }

}
