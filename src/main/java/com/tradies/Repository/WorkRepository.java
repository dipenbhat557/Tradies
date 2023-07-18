package com.tradies.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradies.Model.Work;
import com.tradies.Model.WorkItem;

public interface WorkRepository extends JpaRepository<Work, Integer>{

    public List<Work> findByItem(WorkItem item);
    
}
