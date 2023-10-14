package com.tradiesKraken.Service;

import java.util.List;

import com.tradiesKraken.ModelDto.SubCategoryDto;
import com.tradiesKraken.Payload.SubCategoryRequest;

public interface SubCategoryService {

    public SubCategoryDto create(SubCategoryDto subCategoryDto);

    public List<SubCategoryDto> viewAll();

    public SubCategoryDto viewById(int subCategoryId);

    public void delete(int subCategoryId);

    public List<SubCategoryDto> viewByCategory(int categoryId);
}
