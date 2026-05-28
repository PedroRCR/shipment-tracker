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
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
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

    @PrePersist
    protected void onCreate() {
        occurredAt = LocalDateTime.now();
    }
}
