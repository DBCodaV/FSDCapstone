package com.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.entity.Cinema;

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, Long> {
	@Query("Select c FROM Cinema c Where c.name = :name")
	public Optional<Cinema> getCinemaByName(@Param("name") String name);
}
