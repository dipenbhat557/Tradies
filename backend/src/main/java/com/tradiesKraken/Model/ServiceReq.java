package com.tradiesKraken.Model;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class ServiceReq {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int serviceId;

    private String status;

    private String serviceImg;

    private Timestamp datetime;

    private String description;

    @ManyToOne
    private Location location;

    @ManyToOne
    private Work work;

    @ManyToOne
    private User reqUser;

    @ManyToOne
    private User accepterUser;

}
