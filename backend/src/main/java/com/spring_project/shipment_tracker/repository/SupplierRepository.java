package com.spring_project.shipment_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring_project.shipment_tracker.model.entity.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Integer>{
    
}