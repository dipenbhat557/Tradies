package com.tradiesKraken.ServiceImpl;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradiesKraken.Exception.ResourceNotFoundException;
import com.tradiesKraken.Model.ServiceReq;
import com.tradiesKraken.Model.User;
import com.tradiesKraken.ModelDto.ServiceReqDto;
import com.tradiesKraken.Payload.ModelToDto;
import com.tradiesKraken.Payload.ServiceReqRequest;
import com.tradiesKraken.Repository.ServiceReqRepository;
import com.tradiesKraken.Repository.UserRepository;
import com.tradiesKraken.Repository.WorkRepository;
import com.tradiesKraken.Service.ServiceReqService;

@Service
public class ServiceReqServiceImpl implements ServiceReqService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ServiceReqRepository serviceReqRepository;

    @Autowired
    private WorkRepository workRepository;

    @Autowired
    private ModelToDto modelToDto;

    @Override
    public ServiceReqDto create(ServiceReqRequest serviceReqRequest, String username) {
        ServiceReq serviceReq = new ServiceReq();

        serviceReq.setStatus("pending");
        serviceReq.setDatetime(new Date());

        User user = this.userRepository.findByEmail(username)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));

        serviceReq.setLocation(user.getLocation());

        serviceReq.setWork(this.workRepository.findById(serviceReqRequest.getWorkId())
                .orElseThrow(() -> new ResourceNotFoundException("The expected work is not found")));

        serviceReq.setReqUser(user);

        serviceReq = this.serviceReqRepository.save(serviceReq);

        return this.modelToDto.serviceReq(serviceReq);
    }

    @Override
    public List<ServiceReqDto> viewAll() {
        List<ServiceReq> serviceReqs = this.serviceReqRepository.findAll();
        List<ServiceReqDto> serviceReqDtos = serviceReqs.stream().map(req -> this.modelToDto.serviceReq(req))
                .collect(Collectors.toList());
        return serviceReqDtos;
    }

    @Override
    public ServiceReqDto viewById(int serviceReqId) {
        return this.modelToDto.serviceReq(this.serviceReqRepository.findById(serviceReqId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected service req is not found")));
    }

    @Override
    public void delete(int serviceReqId) {
        this.serviceReqRepository.delete(this.serviceReqRepository.findById(serviceReqId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected service request is not found")));
    }

    @Override
    public List<ServiceReqDto> viewByAccepter(String userId) {
        List<ServiceReq> serviceReqs = this.serviceReqRepository.findByAccepterUser(this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found")));
        List<ServiceReqDto> serviceReqDtos = serviceReqs.stream().map(req -> this.modelToDto.serviceReq(req))
                .collect(Collectors.toList());
        return serviceReqDtos;
    }

    @Override
    public List<ServiceReqDto> viewByReqUser(String userId) {
        List<ServiceReq> serviceReqs = this.serviceReqRepository.findByReqUser(this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found")));
        List<ServiceReqDto> serviceReqDtos = serviceReqs.stream().map(req -> this.modelToDto.serviceReq(req))
                .collect(Collectors.toList());
        return serviceReqDtos;
    }

    @Override
    public ServiceReqDto acceptedByUser(int serviceId, String userId) {
        ServiceReq serviceReq = this.serviceReqRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected service request is not found"));
        serviceReq.setAccepterUser(this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found")));
        return this.modelToDto.serviceReq(serviceReq);
    }

}
