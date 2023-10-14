package com.tradiesKraken.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradiesKraken.Model.SubCategory;
import com.tradiesKraken.Model.Work;

public interface WorkRepository extends JpaRepository<Work, Integer> {
    List<Work> findBySubCategory(SubCategory subCategory);
}
