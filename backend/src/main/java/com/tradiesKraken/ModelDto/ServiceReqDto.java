package com.tradiesKraken.ModelDto;

import java.sql.Timestamp;
import java.util.Date;

import lombok.Data;

@Data
public class ServiceReqDto {

    private int serviceId;

    private String status;

    private Date datetime;

    private String location;

    private int workId;

    private String reqUserId;

    private String accepterUserId;

}
