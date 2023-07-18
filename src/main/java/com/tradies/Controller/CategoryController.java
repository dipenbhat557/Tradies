package com.tradies.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tradies.Model.Category;
import com.tradies.Services.CategoryService;
import com.tradies.Services.FileUploadService;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private FileUploadService fileUploadService;

    @Value("${product.path.images}")
    private String imagePath;

    @PostMapping("/create/{serviceId}")
    public ResponseEntity<Category> createCategory(@PathVariable int serviceId,@RequestBody Category category) {
        return new ResponseEntity<Category>(this.categoryService.createCategory(serviceId,category), HttpStatus.CREATED);
    }

    @GetMapping("/view")
    public ResponseEntity<List<Category>> getAllCategories() {
        return new ResponseEntity<List<Category>>(this.categoryService.viewAllCategories(), HttpStatus.OK);
    }

    @GetMapping("/viewById/{categoryId}")
    public ResponseEntity<Category> viewById(@PathVariable int category) {
        return new ResponseEntity<Category>(this.categoryService.viewById(category), HttpStatus.ACCEPTED);
    }

    @GetMapping("/delete/{categoryId}")
    public ResponseEntity<String> delete(@PathVariable int categoryId) {
        return new ResponseEntity<String>("Sucessfully deleted category.....", HttpStatus.OK);
    }

    @PostMapping("/images/{categoryId}")
    public ResponseEntity<?> uploadImageOfProduct(@PathVariable int categoryId, @RequestParam("categoryImage") MultipartFile file){
        
        Category category = this.categoryService.viewById(categoryId);

        String imageName = null;

        try{

            imageName = this.fileUploadService.uploadImage(imagePath, file);
            category.setImageName(imageName);

            Category updatedCategory = this.categoryService.updateCategory(categoryId, category);

            return new ResponseEntity<>(updatedCategory,HttpStatus.ACCEPTED);

        }catch(Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(Map.of("Message","File not uploaded in server "),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
