package com.tradiesKraken.ModelDto;

import java.util.List;

import lombok.Data;

@Data
public class WorkDto {

    private int workId;

    private String title;

    private String workImg;

    private int subCategoryId;

    private List<Integer> serviceReqIds;

}
