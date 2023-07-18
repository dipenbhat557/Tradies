package com.tradies.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradies.Exception.ResourceNotFoundException;
import com.tradies.Model.Category;
import com.tradies.Model.WorkItem;
import com.tradies.Repository.CategoryRepository;
import com.tradies.Repository.WorkItemRepository;

@Service
public class WorkItemService {

    @Autowired
    private WorkItemRepository workItemRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public WorkItem createItems(WorkItem workItems, int categoryId){
        Category category = this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("The expected category to set into work items is not found"));

        workItems.setCategory(category);

        return this.workItemRepository.save(workItems);

    }

    public List<WorkItem> viewAllItems(){
        return this.workItemRepository.findAll();
    }

    public WorkItem viewById(int itemId){
        return this.workItemRepository.findById(itemId).orElseThrow(() -> new ResourceNotFoundException("The expected work item is not found"));
    }

    public void delete(int itemId){
        this.workItemRepository.delete(this.workItemRepository.findById(itemId).orElseThrow(() -> new ResourceNotFoundException("The expected work item is not found while deleting it")));
    }

    public WorkItem updateItem(int itemId, WorkItem item){
        
        WorkItem oldItem  = this.workItemRepository.findById(itemId).orElseThrow(() -> new ResourceNotFoundException("The expected work item is not found while updating"));

        oldItem.setTitle(item.getTitle());
        oldItem.setImageName(item.getImageName());
        oldItem.setCategory(item.getCategory());

        this.workItemRepository.save(oldItem);

        return oldItem;
    }
    
    public List<WorkItem> getByCategory(int categoryId){
        return this.workItemRepository.findByCategory(this.categoryRepository.findById(categoryId).orElseThrow(() -> new ResourceNotFoundException("The expected category is not found")));
    }
}
