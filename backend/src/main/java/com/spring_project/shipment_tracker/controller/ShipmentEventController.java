package com.spring_project.shipment_tracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring_project.shipment_tracker.model.dto.CreateShipmentEventDto;
import com.spring_project.shipment_tracker.model.entity.ShipmentEvent;
import com.spring_project.shipment_tracker.service.ShipmentEventService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


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

    @PostMapping
    public ShipmentEvent createShipmentEvent(@RequestBody CreateShipmentEventDto createShipmentEventDto) {
        return ShipmentEventService.createShipmentEvent(createShipmentEventDto);
    }
    
}