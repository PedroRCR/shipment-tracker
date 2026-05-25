package com.spring_project.shipment_tracker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Shipment Tracker Backend Running";
    }

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello API";
    }
}