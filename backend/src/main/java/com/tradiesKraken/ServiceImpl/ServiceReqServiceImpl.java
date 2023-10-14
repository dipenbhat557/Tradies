package com.tradiesKraken.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tradiesKraken.ModelDto.ServiceReqDto;
import com.tradiesKraken.Service.ServiceReqService;

@Service
public class ServiceReqServiceImpl implements ServiceReqService {

    @Override
    public ServiceReqDto create(ServiceReqDto serviceReqDto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'create'");
    }

    @Override
    public List<ServiceReqDto> viewAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'viewAll'");
    }

    @Override
    public ServiceReqDto viewById(int serviceReqId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'viewById'");
    }

    @Override
    public void delete(int serviceReqId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    @Override
    public List<ServiceReqDto> viewByAccepter(int userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'viewByAccepter'");
    }

    @Override
    public List<ServiceReqDto> viewByReqUser(int userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'viewByReqUser'");
    }

}
