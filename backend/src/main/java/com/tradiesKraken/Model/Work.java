package com.tradiesKraken.Model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Work {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int workId;

    private String title;

    private String workImg;

    @ManyToOne
    private Category category;

    @OneToMany(mappedBy = "work", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<ServiceReq> serviceReqs = new ArrayList<>();

}
