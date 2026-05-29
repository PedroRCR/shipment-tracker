package com.spring_project.shipment_tracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring_project.shipment_tracker.model.entity.Shipment;
import com.spring_project.shipment_tracker.service.ShipmentService;

@RestController
@RequestMapping("/shipments")
public class ShipmentController {
    
    @Autowired
    private ShipmentService shipmentService;

    @GetMapping
    public List<Shipment> getAllShipments() {
        return shipmentService.getAllShipments();        
    }
}
