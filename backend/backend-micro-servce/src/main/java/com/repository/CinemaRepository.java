package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Cinema;

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, Long> {

}
