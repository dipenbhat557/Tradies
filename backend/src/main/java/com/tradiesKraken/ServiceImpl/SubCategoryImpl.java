package com.tradiesKraken.ServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradiesKraken.Exception.ResourceNotFoundException;
import com.tradiesKraken.Model.Category;
import com.tradiesKraken.Model.SubCategory;
import com.tradiesKraken.ModelDto.SubCategoryDto;
import com.tradiesKraken.Payload.ModelToDto;
import com.tradiesKraken.Payload.SubCategoryRequest;
import com.tradiesKraken.Repository.CategoryRepository;
import com.tradiesKraken.Repository.SubCategoryRepository;
import com.tradiesKraken.Service.SubCategoryService;

@Service
public class SubCategoryImpl implements SubCategoryService {

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelToDto modelToDto;

    @Override
    public SubCategoryDto create(SubCategoryDto subCategoryDto) {
        SubCategory subCategory = new SubCategory();
        subCategory.setTitle(subCategoryDto.getTitle());

        Category category = this.categoryRepository.findById(subCategoryDto.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("The expected category is not found"));
        subCategory.setCategory(category);

        subCategory.setSubCategoryImg(subCategoryDto.getSubCategoryImg());

        subCategory = this.subCategoryRepository.save(subCategory);

        return this.modelToDto.subCategory(subCategory);
    }

    @Override
    public List<SubCategoryDto> viewAll() {
        List<SubCategory> subCategories = this.subCategoryRepository.findAll();
        List<SubCategoryDto> subCategoryDtos = subCategories.stream().map(sub -> this.modelToDto.subCategory(sub))
                .collect(Collectors.toList());
        return subCategoryDtos;
    }

    @Override
    public SubCategoryDto viewById(int subCategoryId) {
        SubCategory subCategory = this.subCategoryRepository.findById(subCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected sub category is not found"));
        return this.modelToDto.subCategory(subCategory);
    }

    @Override
    public void delete(int subCategoryId) {
        this.subCategoryRepository.delete(this.subCategoryRepository.findById(subCategoryId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected sub category is not found")));
    }

    @Override
    public List<SubCategoryDto> viewByCategory(int categoryId) {
        Category category = this.categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected category is not found"));
        List<SubCategory> subCategories = this.subCategoryRepository.findByCategory(category);

        List<SubCategoryDto> subCategoryDtos = subCategories.stream().map(sub -> this.modelToDto.subCategory(sub))
                .collect(Collectors.toList());

        return subCategoryDtos;
    }

}
