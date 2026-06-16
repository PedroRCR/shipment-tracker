package com.spring_project.shipment_tracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.spring_project.shipment_tracker.model.entity.Shipment;

public interface ShipmentRepository extends JpaRepository<Shipment, Integer> {

    List<Shipment> findBySupplierId(@Param("supplierId") Integer supplierId);

    Boolean existsByTrackingNumber(String trackingNumber);
}
