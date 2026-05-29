package com.spring_project.shipment_tracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring_project.shipment_tracker.model.entity.Supplier;
import com.spring_project.shipment_tracker.repository.SupplierRepository;

@Service
public class SupplierService {
    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }
}
