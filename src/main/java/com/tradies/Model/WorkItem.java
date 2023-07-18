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
public class WorkItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int itemId;

    private String title;

    private String imageName;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Work> work;

    
    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public WorkItem(int itemId, String title, String imageName, Category category) {
        this.itemId = itemId;
        this.title = title;
        this.imageName = imageName;
        this.category = category;
    }

    public WorkItem() {
    }

    @Override
    public String toString() {
        return "WorkItems [itemId=" + itemId + ", title=" + title + ", imageName=" + imageName + ", category="
                + category + "]";
    }

    public List<Work> getWork() {
        return work;
    }

    public void setWork(List<Work> work) {
        this.work = work;
    }

    
    
}
