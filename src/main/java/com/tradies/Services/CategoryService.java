package com.tradies.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradies.Exception.ResourceNotFoundException;
import com.tradies.Model.Category;
import com.tradies.Repository.CategoryRepository;
import com.tradies.Repository.ServiceRepository;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    public Category createCategory(int serviceId, Category category) {
        category.setServices(this.serviceRepository.findById(serviceId).orElseThrow(() -> new ResourceNotFoundException("The expected service is not found while setting to category")));

        return this.categoryRepository.save(category);
    }

    public List<Category> viewAllCategories() {
        return this.categoryRepository.findAll();
    }

    public Category viewById(int categoryId) {
        return this.categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected category is not found"));
    }

    public void delete(int categoryId) {
        this.categoryRepository.delete(this.categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("The category to be deleted is not found")));
    }

    public Category updateCategory(int categoryId, Category category) {

        Category oldCategory = this.categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Sorry the requested old category is not there !!"));

        oldCategory.setImageName(category.getImageName());
        oldCategory.setTitle(category.getTitle());
        oldCategory.setServices(category.getServices());

        return this.categoryRepository.save(oldCategory);
    }

}
