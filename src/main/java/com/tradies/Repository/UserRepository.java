package com.tradies.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradies.Model.User;

public interface UserRepository extends JpaRepository<User, Integer>{
    
}
