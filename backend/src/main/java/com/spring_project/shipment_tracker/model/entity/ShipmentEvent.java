package com.spring_project.shipment_tracker.model.entity;

import java.time.LocalDateTime;

import com.spring_project.shipment_tracker.util.ShipmentStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

@Entity
@Table(name = "shipment_event")
public class ShipmentEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_name", nullable = false)
    private ShipmentStatus statusName;

    @Column(name = "occurred_at", nullable = false)
    private LocalDateTime occurredAt;

    @Column(name = "shipment_id", nullable = false)
    private Integer shipmentId;

    public ShipmentEvent() {
    }

    public ShipmentEvent(Integer id, ShipmentStatus statusName, LocalDateTime occurredAt, Integer shipmentId) {
        this.id = id;
        this.statusName = statusName;
        this.occurredAt = occurredAt;
        this.shipmentId = shipmentId;
    }

    @PrePersist
    protected void onCreate() {
        occurredAt = LocalDateTime.now();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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