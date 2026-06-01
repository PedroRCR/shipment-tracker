package com.spring_project.shipment_tracker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring_project.shipment_tracker.model.entity.Supplier;
import com.spring_project.shipment_tracker.repository.SupplierRepository;

@Service
public class SupplierService {
    private SupplierRepository supplierRepository;

    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }
}
