package com.tradies.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int categoryId;

    private String title;

    private String imageName;

    @ManyToOne(fetch = FetchType.EAGER)
    private Services services;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL,orphanRemoval = true)
    private List<WorkItem> items;

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public Services getServices() {
        return services;
    }

    public void setServices(Services services) {
        this.services = services;
    }

    public Category() {
    }

    

    public Category(int categoryId, String title, String imageName, Services services, List<WorkItem> items) {
        this.categoryId = categoryId;
        this.title = title;
        this.imageName = imageName;
        this.services = services;
        this.items = items;
    }

    @Override
    public String toString() {
        return "Category [categoryId=" + categoryId + ", title=" + title + ", imageName=" + imageName + ", services="
                + services + "]";
    }

    public List<WorkItem> getItems() {
        return items;
    }

    public void setItems(List<WorkItem> items) {
        this.items = items;
    }
    

}
