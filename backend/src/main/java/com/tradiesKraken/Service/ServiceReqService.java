package com.tradiesKraken.Service;

import java.util.List;

import com.tradiesKraken.ModelDto.ServiceReqDto;
import com.tradiesKraken.Payload.ServiceReqRequest;

public interface ServiceReqService {

    public ServiceReqDto create(ServiceReqRequest serviceReqRequest, String username);

    public List<ServiceReqDto> viewAll();

    public ServiceReqDto viewById(int serviceReqId);

    public void delete(int serviceReqId);

    public ServiceReqDto acceptedByUser(int serviceId, String userId);

    public List<ServiceReqDto> viewByAccepter(String userId);

    public List<ServiceReqDto> viewByReqUser(String userId);

}
