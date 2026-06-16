package com.spring_project.shipment_tracker.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring_project.shipment_tracker.model.dto.CreateShipmentDto;
import com.spring_project.shipment_tracker.model.entity.Shipment;
import com.spring_project.shipment_tracker.model.entity.ShipmentEvent;
import com.spring_project.shipment_tracker.service.ShipmentEventService;
import com.spring_project.shipment_tracker.service.ShipmentService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/shipment")
public class ShipmentController {

    private ShipmentService shipmentService;
    private ShipmentEventService shipmentEventService;

    public ShipmentController(ShipmentService shipmentService, ShipmentEventService shipmentEventService) {
        this.shipmentService = shipmentService;
        this.shipmentEventService = shipmentEventService;
    }

    @GetMapping
    public List<Shipment> getAllShipments() {
        return shipmentService.getAllShipments();
    }

    @PostMapping
    public Shipment createShipment(@RequestBody CreateShipmentDto dto) {
        return shipmentService.createShipment(dto);
    }

    @GetMapping("/supplier/{supplierId}")
    public List<Shipment> getShipmentsBySupplierId(@PathVariable Integer supplierId) {
        return shipmentService.getShipmentsBySupplierId(supplierId);
    }

    @GetMapping("/{shipmentId}/events")
    public List<ShipmentEvent> getShipmentEvents(@PathVariable Integer shipmentId) {
        return shipmentEventService.findByShipmentId(shipmentId);
    }
}