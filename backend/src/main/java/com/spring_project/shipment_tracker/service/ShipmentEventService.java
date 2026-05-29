package com.spring_project.shipment_tracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring_project.shipment_tracker.model.entity.ShipmentEvent;
import com.spring_project.shipment_tracker.repository.ShipmentEventRepository;

@Service
public class ShipmentEventService {
    @Autowired
    private ShipmentEventRepository shipmentEventRepository;

    public List<ShipmentEvent> getAllShipmentEvents() {
        return shipmentEventRepository.findAll();
    }
}
