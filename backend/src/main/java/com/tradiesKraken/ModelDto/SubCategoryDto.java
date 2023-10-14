package com.tradiesKraken.ModelDto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class SubCategoryDto {

    private int subCategoryId;

    private String title;

    private String subCategoryImg;

    private List<Integer> workIds = new ArrayList<>();

    private int categoryId;

}
