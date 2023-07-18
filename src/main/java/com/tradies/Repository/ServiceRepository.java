package com.tradies.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradies.Model.Services;

public interface ServiceRepository extends JpaRepository<Services, Integer>{
    
}
