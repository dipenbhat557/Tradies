package com.tradiesKraken.ModelDto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class CategoryDto {

    private int categoryId;

    private String title;

    private String categoryImg;

    private List<Integer> workIds = new ArrayList<>();

}
