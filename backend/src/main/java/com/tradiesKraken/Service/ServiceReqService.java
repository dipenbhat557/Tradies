package com.tradiesKraken.Service;

import java.util.List;

import com.tradiesKraken.ModelDto.ServiceReqDto;

public interface ServiceReqService {

    public ServiceReqDto create(ServiceReqDto serviceReqDto);

    public List<ServiceReqDto> viewAll();

    public ServiceReqDto viewById(int serviceReqId);

    public void delete(int serviceReqId);

    public List<ServiceReqDto> viewByAccepter(int userId);

    public List<ServiceReqDto> viewByReqUser(int userId);
}
