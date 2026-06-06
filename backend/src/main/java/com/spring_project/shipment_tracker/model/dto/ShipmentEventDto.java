package com.spring_project.shipment_tracker.model.dto;

import java.time.LocalDateTime;

public class ShipmentEventDto {
    Integer id;
    String statusName;
    LocalDateTime ocurredAt;

    public ShipmentEventDto(Integer id, String statusName, LocalDateTime ocurredAt) {
        this.id = id;
        this.statusName = statusName;
        this.ocurredAt = ocurredAt;
    }

    public ShipmentEventDto() {
    }

    public Integer getId() {
        return id;
    }

    public String getStatusName() {
        return statusName;
    }

    public LocalDateTime getOcurredAt() {
        return ocurredAt;
    }
}
