package com.tradiesKraken.Service;

import java.util.List;

import com.tradiesKraken.ModelDto.CategoryDto;

public interface CategoryService {

    public CategoryDto create(CategoryDto categoryDto);

    public List<CategoryDto> viewAll();

    public CategoryDto viewById(int categoryId);

    public void delete(int categoryId);

}
