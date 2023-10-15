package com.tradiesKraken.ModelDto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class LocationDto {

    private int locationId;

    private double longitude;

    private double latitude;

    private List<String> userIds = new ArrayList<>();

    private List<Integer> serviceReqIds = new ArrayList<>();
}
