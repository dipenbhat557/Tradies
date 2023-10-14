package com.tradiesKraken.ServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradiesKraken.Exception.ResourceNotFoundException;
import com.tradiesKraken.Model.Category;
import com.tradiesKraken.ModelDto.CategoryDto;
import com.tradiesKraken.Payload.ModelToDto;
import com.tradiesKraken.Repository.CategoryRepository;
import com.tradiesKraken.Service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelToDto modelToDto;

    @Override
    public CategoryDto create(CategoryDto categoryDto) {
        Category category = new Category();
        category.setTitle(categoryDto.getTitle());
        category.setCategoryImg(categoryDto.getCategoryImg());

        category = this.categoryRepository.save(category);

        return this.modelToDto.category(category);
    }

    @Override
    public List<CategoryDto> viewAll() {
        List<Category> categories = this.categoryRepository.findAll();
        List<CategoryDto> categoryDtos = categories.stream().map(category -> this.modelToDto.category(category))
                .collect(Collectors.toList());
        return categoryDtos;
    }

    @Override
    public CategoryDto viewById(int categoryId) {
        Category category = this.categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected category is not found"));
        return this.modelToDto.category(category);
    }

    @Override
    public void delete(int categoryId) {
        this.categoryRepository.delete(this.categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found")));
    }

}
