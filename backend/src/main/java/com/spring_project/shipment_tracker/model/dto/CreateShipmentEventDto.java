package com.spring_project.shipment_tracker.model.dto;

import java.time.LocalDateTime;

import com.spring_project.shipment_tracker.util.ShipmentStatus;

public class CreateShipmentEventDto {
    private ShipmentStatus statusName;
    private LocalDateTime occurredAt;
    private Integer shipmentId;

    public ShipmentStatus getStatusName() {
        return statusName;
    }
    public void setStatusName(ShipmentStatus statusName) {
        this.statusName = statusName;
    }
    public LocalDateTime getOccurredAt() {
        return occurredAt;
    }
    public void setOccurredAt(LocalDateTime occurredAt) {
        this.occurredAt = occurredAt;
    }
    public Integer getShipmentId() {
        return shipmentId;
    }
    public void setShipmentId(Integer shipmentId) {
        this.shipmentId = shipmentId;
    }
}
