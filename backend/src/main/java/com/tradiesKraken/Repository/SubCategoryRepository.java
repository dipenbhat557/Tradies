package com.tradiesKraken.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradiesKraken.Model.Category;
import com.tradiesKraken.Model.SubCategory;

public interface SubCategoryRepository extends JpaRepository<SubCategory, Integer> {

    List<SubCategory> findByCategory(Category category);
}
