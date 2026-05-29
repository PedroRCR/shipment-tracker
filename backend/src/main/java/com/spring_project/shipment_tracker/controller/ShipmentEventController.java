package com.spring_project.shipment_tracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring_project.shipment_tracker.model.entity.ShipmentEvent;
import com.spring_project.shipment_tracker.service.ShipmentEventService;

@RestController
@RequestMapping("/shipment-event")
public class ShipmentEventController {

    @Autowired
    private ShipmentEventService ShipmentEventService;

    @GetMapping
    public List<ShipmentEvent> getAllShipmentEvents() {
        return ShipmentEventService.getAllShipmentEvents();
    }
}