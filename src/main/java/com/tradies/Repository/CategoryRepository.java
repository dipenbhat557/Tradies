package com.tradies.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradies.Model.Category;

public interface CategoryRepository extends JpaRepository<Category,Integer>{
    
}
