package com.tradiesKraken.ServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradiesKraken.Exception.ResourceNotFoundException;
import com.tradiesKraken.Model.Category;
import com.tradiesKraken.Model.SubCategory;
import com.tradiesKraken.Model.Work;
import com.tradiesKraken.ModelDto.WorkDto;
import com.tradiesKraken.Payload.ModelToDto;
import com.tradiesKraken.Repository.CategoryRepository;
import com.tradiesKraken.Repository.SubCategoryRepository;
import com.tradiesKraken.Repository.WorkRepository;
import com.tradiesKraken.Service.WorkService;

@Service
public class WorkServiceImpl implements WorkService {

    @Autowired
    private WorkRepository workRepository;

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    private ModelToDto modelToDto;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public WorkDto createWork(WorkDto workDto) {
        Work work = new Work();

        work.setTitle(workDto.getTitle());
        work.setWorkImg(workDto.getWorkImg());

        SubCategory subCategory = this.subCategoryRepository.findById(workDto.getSubCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("The expected sub category is not found"));

        work.setSubCategory(subCategory);

        work = this.workRepository.save(work);

        return this.modelToDto.work(work);
    }

    @Override
    public List<WorkDto> viewAll() {
        List<Work> works = this.workRepository.findAll();
        List<WorkDto> workDtos = works.stream().map(work -> this.modelToDto.work(work)).collect(Collectors.toList());
        return workDtos;
    }

    @Override
    public WorkDto viewById(int workId) {
        Work work = this.workRepository.findById(workId)
                .orElseThrow(() -> new ResourceNotFoundException("The required work is not found"));
        return this.modelToDto.work(work);
    }

    @Override
    public void delete(int workId) {
        this.workRepository.delete(this.workRepository.findById(workId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected work is not found")));
    }

    @Override
    public List<WorkDto> viewBySubCategory(int subCategoryid) {
        SubCategory subCategory = this.subCategoryRepository.findById(subCategoryid)
                .orElseThrow(() -> new ResourceNotFoundException("The expected sub category is not found"));
        List<Work> works = this.workRepository.findBySubCategory(subCategory);
        List<WorkDto> workDtos = works.stream().map(work -> this.modelToDto.work(work)).collect(Collectors.toList());
        return workDtos;
    }

}
