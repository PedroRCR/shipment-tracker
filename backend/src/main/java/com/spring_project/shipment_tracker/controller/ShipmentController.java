package com.spring_project.shipment_tracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring_project.shipment_tracker.model.dto.ShipmentCreateRequestDto;
import com.spring_project.shipment_tracker.model.dto.ShipmentDto;
import com.spring_project.shipment_tracker.model.entity.Shipment;
import com.spring_project.shipment_tracker.service.ShipmentService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/shipments")
public class ShipmentController {
    
    private ShipmentService shipmentService;

    public ShipmentController(ShipmentService shipmentService) {
        this.shipmentService = shipmentService;
    }

    @GetMapping
    public List<Shipment> getAllShipments() {
        return shipmentService.getAllShipments();        
    }

    @PostMapping
    public Shipment createShipment(@RequestBody ShipmentCreateRequestDto shipment) {
        return shipmentService.createShipment(shipment);
    }

    @GetMapping("/supplier/{supplierId}")
    public List<ShipmentDto> getShipmentsBySupplierId(@PathVariable Integer supplierId) {
        return shipmentService.getShipmentsBySupplierId(supplierId);
    }
}