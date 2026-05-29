package com.spring_project.shipment_tracker.model.entity;

import java.time.LocalDateTime;

import com.spring_project.shipment_tracker.util.ShipmentStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shipment_id", nullable = false)
    private Shipment shipment;

    public ShipmentEvent() {
    }

    public ShipmentEvent(Integer id, ShipmentStatus statusName, LocalDateTime occurredAt, Shipment shipment) {
        this.id = id;
        this.statusName = statusName;
        this.occurredAt = occurredAt;
        this.shipment = shipment;
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

    public Shipment getShipment() {
        return shipment;
    }

    public void setShipment(Shipment shipment) {
        this.shipment = shipment;
    }
}
