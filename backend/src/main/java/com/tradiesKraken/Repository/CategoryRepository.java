package com.tradiesKraken.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradiesKraken.Model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
