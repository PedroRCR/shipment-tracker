package com.spring_project.shipment_tracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring_project.shipment_tracker.model.dto.ShipmentCreateRequestDto;
import com.spring_project.shipment_tracker.model.dto.ShipmentDto;
import com.spring_project.shipment_tracker.model.entity.Shipment;
import com.spring_project.shipment_tracker.model.entity.Supplier;
import com.spring_project.shipment_tracker.repository.ShipmentRepository;
import com.spring_project.shipment_tracker.repository.SupplierRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ShipmentService {

    private final ShipmentRepository shipmentRepository;
    private final SupplierRepository supplierRepository;

    public ShipmentService(ShipmentRepository shipmentRepository, SupplierRepository supplierRepository) {
        this.shipmentRepository = shipmentRepository;
        this.supplierRepository = supplierRepository;
    }

    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }

    public Shipment createShipment(ShipmentCreateRequestDto dto) {

        if (shipmentRepository.existsByTrackingNumber(dto.getTrackingNumber())) {
            throw new IllegalArgumentException(
                    "Tracking number already exists: " + dto.getTrackingNumber());
        }

        Supplier supplier = supplierRepository.findById(dto.getSupplierId())
                .orElseThrow(() -> new EntityNotFoundException(
                        "Supplier not found with id: " + dto.getSupplierId()));

        Shipment shipment = new Shipment();
        shipment.setTrackingNumber(dto.getTrackingNumber());
        shipment.setOrigin(dto.getOrigin());
        shipment.setDestination(dto.getDestination());
        shipment.setWeight(dto.getWeight());
        shipment.setCurrentStatus(dto.getCurrentStatus());
        shipment.setSupplier(supplier);

        return shipmentRepository.save(shipment);
    }

    public List<ShipmentDto> getShipmentsBySupplierId(Integer supplierId) {
        return shipmentRepository.findBySupplierId(supplierId);
    }
}
