package com.tradies.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradies.Exception.ResourceNotFoundException;
import com.tradies.Model.Services;
import com.tradies.Repository.ServiceRepository;

@Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    public Services createService(Services service){
        return this.serviceRepository.save(service);
    }

    public List<Services> getAllServices(){
        return this.serviceRepository.findAll();
    }

    public Services getServiceById(int serviceId){
        return this.serviceRepository.findById(serviceId).orElseThrow(() -> new ResourceNotFoundException("The requested service is not found"));
    }

    public void delete(int serviceId){
        this.serviceRepository.delete(this.serviceRepository.findById(serviceId).orElseThrow(() -> new ResourceNotFoundException("The expected service is not found while deleting")));
    }
    
}
