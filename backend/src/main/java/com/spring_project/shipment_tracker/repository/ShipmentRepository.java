package com.spring_project.shipment_tracker.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.spring_project.shipment_tracker.model.dto.ShipmentDto;
import com.spring_project.shipment_tracker.model.entity.Shipment;

public interface ShipmentRepository extends JpaRepository<Shipment, Integer> {

    @Query("SELECT new com.spring_project.shipment_tracker.model.dto.ShipmentDto(" +
           "s.id, s.trackingNumber, s.origin, s.destination, s.weight, " +
           "s.currentStatus, s.supplier.id, s.createdAt, s.updatedAt) " +
           "FROM Shipment s WHERE s.supplier.id = :supplierId")
    List<ShipmentDto> findBySupplierId(@Param("supplierId") Integer supplierId);

    Boolean existsByTrackingNumber(String trackingNumber);
}
