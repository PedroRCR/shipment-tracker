package com.spring_project.shipment_tracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring_project.shipment_tracker.model.entity.ShipmentEvent;
import com.spring_project.shipment_tracker.repository.ShipmentEventRepository;

@Service
public class ShipmentEventService {
    private ShipmentEventRepository shipmentEventRepository;

    public ShipmentEventService(ShipmentEventRepository shipmentEventRepository) {
        this.shipmentEventRepository = shipmentEventRepository;
    }

    public List<ShipmentEvent> getAllShipmentEvents() {
        return shipmentEventRepository.findAll();
    }
}
