package com.tradies.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Work {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int workId;

    private String title;

    private double price;

    private String description;

    private String imageName;

    @ManyToOne(fetch = FetchType.EAGER)
    private WorkItem item;

    public int getWorkId() {
        return workId;
    }

    public void setWorkId(int workId) {
        this.workId = workId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public WorkItem getItem() {
        return item;
    }

    public void setItem(WorkItem item) {
        this.item = item;
    }

    public Work(int workId, String title, double price, String description, String imageName, WorkItem item) {
        this.workId = workId;
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageName = imageName;
        this.item = item;
    }

    public Work() {
    }

    @Override
    public String toString() {
        return "Work [workId=" + workId + ", title=" + title + ", price=" + price + ", description=" + description
                + ", imageName=" + imageName + ", item=" + item + "]";
    }
    
    
}
