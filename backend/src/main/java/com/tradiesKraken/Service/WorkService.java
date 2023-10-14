package com.tradiesKraken.Service;

import java.util.List;

import com.tradiesKraken.ModelDto.WorkDto;

public interface WorkService {

    public WorkDto createWork(WorkDto workDto);

    public List<WorkDto> viewAll();

    public WorkDto viewById(int workId);

    public void delete(int workId);

    public List<WorkDto> viewBySubCategory(int subCategoryid);

}
