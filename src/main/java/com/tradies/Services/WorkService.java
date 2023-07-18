package com.tradies.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradies.Exception.ResourceNotFoundException;
import com.tradies.Model.Work;
import com.tradies.Model.WorkItem;
import com.tradies.Repository.WorkItemRepository;
import com.tradies.Repository.WorkRepository;

@Service
public class WorkService {

    @Autowired
    private WorkRepository workRepository;

    @Autowired
    private WorkItemRepository workItemRepository;

    public Work create(Work work, int itemId){
        WorkItem item = this.workItemRepository.findById(itemId).orElseThrow(() -> new ResourceNotFoundException("The expected work is not found while assigning to work"));

        work.setItem(item);

        return this.workRepository.save(work);
    }

    public List<Work> viewAllWorks(){
        return this.workRepository.findAll();
    }

    public List<Work> viewWorkByItem(int itemId){
        WorkItem item = this.workItemRepository.findById(itemId).orElseThrow(() -> new ResourceNotFoundException("The expected work item is not found"));
        return this.workRepository.findByItem(item);
    }

    public Work viewById(int workId){
        return this.workRepository.findById(workId).orElseThrow(() -> new ResourceNotFoundException("The expected work is not found"));
    }

    public void delete(int workId){
        this.workRepository.delete(this.workRepository.findById(workId).orElseThrow(() -> new ResourceNotFoundException("The expected work is not found")));
    }

    public Work update(int workId, Work work){
        Work oldWork = this.workRepository.findById(workId).orElseThrow(() -> new ResourceNotFoundException("The expected work is not found"));

        oldWork.setTitle(work.getTitle());
        oldWork.setDescription(work.getDescription());
        oldWork.setPrice(work.getPrice());
        oldWork.setImageName(work.getImageName());
        oldWork.setItem(work.getItem());

        this.workRepository.save(oldWork);

        return oldWork;
    }
    
}
