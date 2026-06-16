package com.spring_project.shipment_tracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring_project.shipment_tracker.model.dto.CreateShipmentDto;
import com.spring_project.shipment_tracker.model.entity.Shipment;
import com.spring_project.shipment_tracker.repository.ShipmentRepository;
import com.spring_project.shipment_tracker.util.ShipmentStatus;

@Service
public class ShipmentService {

    private final ShipmentRepository shipmentRepository;

    public ShipmentService(ShipmentRepository shipmentRepository) {
        this.shipmentRepository = shipmentRepository;
    }

    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }

    public Shipment createShipment(CreateShipmentDto dto) {

        if (shipmentRepository.existsByTrackingNumber(dto.getTrackingNumber())) {
            throw new IllegalArgumentException(
                    "Tracking number already exists: " + dto.getTrackingNumber());
        }

        Shipment shipment = new Shipment();
        shipment.setTrackingNumber(dto.getTrackingNumber());
        shipment.setOrigin(dto.getOrigin());
        shipment.setDestination(dto.getDestination());
        shipment.setWeight(dto.getWeight());
        shipment.setSupplierId(dto.getSupplierId());
        shipment.setCurrentStatus(ShipmentStatus.PENDING);

        return shipmentRepository.save(shipment);
    }

    public List<Shipment> getShipmentsBySupplierId(Integer supplierId) {
        return shipmentRepository.findBySupplierId(supplierId);
    }
}
