package com.tradies.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Services {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int serviceId;

    private String title;

    @Column(length = 99999)
    private String description;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "services", cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private List<Category> categories;

    public int getServiceId() {
        return serviceId;
    }



    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }



    public String getTitle() {
        return title;
    }



    public void setTitle(String title) {
        this.title = title;
    }



    public String getDescription() {
        return description;
    }



    public void setDescription(String description) {
        this.description = description;
    }



    public List<Category> getCategories() {
        return categories;
    }



    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    
    public Services(int serviceId, String title, String description, List<Category> categories) {
        this.serviceId = serviceId;
        this.title = title;
        this.description = description;
        this.categories = categories;
    }



    public Services() {
    }



    @Override
    public String toString() {
        return "Services [serviceId=" + serviceId + ", title=" + title + ", description=" + description + "]";
    }

}
