package com.tradies.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradies.Model.Services;
import com.tradies.Services.ServiceService;

@RestController
@RequestMapping("/service")
public class ServiceController {

	@Autowired
	private ServiceService serviceService;
	
	@PostMapping("/create")
	public ResponseEntity<Services> createService(@RequestBody Services service){

		return new ResponseEntity<Services>(this.serviceService.createService(service), HttpStatus.CREATED);
	}

	@GetMapping("/view")
	public ResponseEntity<List<Services>> viewAllServices(){
		return new ResponseEntity<List<Services>>(this.serviceService.getAllServices(), HttpStatus.OK);
	}

	@GetMapping("/viewById/{serviceId}")
	public ResponseEntity<Services> viewById(@PathVariable int serviceId){
		return new ResponseEntity<Services>(this.serviceService.getServiceById(serviceId), HttpStatus.ACCEPTED);
	}

	@GetMapping("/delete/{serviceId}")
	public ResponseEntity<String> delete(@PathVariable int serviceId){
		this.serviceService.delete(serviceId);
		return new ResponseEntity<String>("Service Successfully deleted....", HttpStatus.OK);
	}

}
