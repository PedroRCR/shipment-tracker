package com.spring_project.shipment_tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring_project.shipment_tracker.model.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
    
}