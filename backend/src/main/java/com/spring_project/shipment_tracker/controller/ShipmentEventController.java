package com.spring_project.shipment_tracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring_project.shipment_tracker.model.entity.ShipmentEvent;
import com.spring_project.shipment_tracker.service.ShipmentEventService;

@RestController
@RequestMapping("/shipment-event")
public class ShipmentEventController {

    private ShipmentEventService ShipmentEventService;

    public ShipmentEventController(ShipmentEventService shipmentEventService) {
        ShipmentEventService = shipmentEventService;
    }

    @GetMapping
    public List<ShipmentEvent> getAllShipmentEvents() {
        return ShipmentEventService.getAllShipmentEvents();
    }

    /*@GetMapping("shipment")
    public List<ShipmentEvent> getSupplierShipmentEvents() {
        return ShipmentEventService.findByShipmentId();
    }*/
}