package com.spring_project.shipment_tracker.model.dto;

public class CreateShipmentDto {
    String trackingNumber;
    String origin;
    String destination;
    Double weight;
    Integer supplierId;

    public CreateShipmentDto(String trackingNumber, String origin, String destination, Double weight,
            Integer supplierId) {
        this.trackingNumber = trackingNumber;
        this.origin = origin;
        this.destination = destination;
        this.weight = weight;
        this.supplierId = supplierId;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }
}