package com.tradiesKraken.Controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradiesKraken.ModelDto.ServiceReqDto;
import com.tradiesKraken.Payload.ServiceReqRequest;
import com.tradiesKraken.ServiceImpl.ServiceReqServiceImpl;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/service")
public class ServiceReqController {

    @Autowired
    private ServiceReqServiceImpl serviceReqService;

    @PostMapping
    public ResponseEntity<ServiceReqDto> create(@RequestBody ServiceReqRequest serviceReqRequest, Principal principal) {
        return new ResponseEntity<ServiceReqDto>(this.serviceReqService.create(serviceReqRequest, principal.getName()),
                HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<ServiceReqDto>> viewAll() {
        return new ResponseEntity<List<ServiceReqDto>>(this.serviceReqService.viewAll(), HttpStatus.OK);
    }

    @GetMapping("/{serviceReqId}")
    public ResponseEntity<ServiceReqDto> viewById(@PathVariable int serviceReqId) {
        return new ResponseEntity<ServiceReqDto>(this.serviceReqService.viewById(serviceReqId), HttpStatus.OK);
    }

    @DeleteMapping("/{serviceReqId}")
    public ResponseEntity<String> delete(@PathVariable int serviceReqId) {
        return new ResponseEntity<String>("Successfully deleted...", HttpStatus.OK);
    }

    @GetMapping("/{userId}/reqUser")
    public ResponseEntity<List<ServiceReqDto>> viewByReqUser(@PathVariable String userId) {
        return new ResponseEntity<List<ServiceReqDto>>(this.serviceReqService.viewByReqUser(userId), HttpStatus.OK);
    }

    @GetMapping("/{userId}/acceptedUser")
    public ResponseEntity<List<ServiceReqDto>> viewByAcceptedUser(@PathVariable String userId) {
        return new ResponseEntity<List<ServiceReqDto>>(this.serviceReqService.viewByAccepter(userId), HttpStatus.OK);
    }

}
