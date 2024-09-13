package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.Film;

@Repository
public interface FilmRepository extends JpaRepository<Film, Long> {

}
