package com.spring_project.shipment_tracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring_project.shipment_tracker.model.entity.Shipment;
import com.spring_project.shipment_tracker.repository.ShipmentRepository;

@Service
public class ShipmentService {

    @Autowired
    private ShipmentRepository shipmentRepository;

    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }
}
