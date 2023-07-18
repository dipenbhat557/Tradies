package com.tradies.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradies.Model.Category;
import com.tradies.Model.WorkItem;

public interface WorkItemRepository extends JpaRepository<WorkItem, Integer>{

    public List<WorkItem> findByCategory(Category category);
    
}
