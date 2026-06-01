package com.spring_project.shipment_tracker.model.dto;

import java.time.LocalDateTime;

import com.spring_project.shipment_tracker.util.ShipmentStatus;

public class ShipmentCreateRequestDto {
    String trackingNumber;
    String origin;
    String destination;
    Double weight;
    ShipmentStatus currentStatus;
    Integer supplierId;
    LocalDateTime createdAt;
    LocalDateTime updatedAt;

    public ShipmentCreateRequestDto(String trackingNumber, String origin, String destination, Double weight,
            ShipmentStatus currentStatus, Integer supplierId, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.trackingNumber = trackingNumber;
        this.origin = origin;
        this.destination = destination;
        this.weight = weight;
        this.currentStatus = currentStatus;
        this.supplierId = supplierId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public String getOrigin() {
        return origin;
    }

    public String getDestination() {
        return destination;
    }

    public Double getWeight() {
        return weight;
    }

    public ShipmentStatus getCurrentStatus() {
        return currentStatus;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}