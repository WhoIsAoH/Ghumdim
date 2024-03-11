package com.aoh.ghumdim.places.repo;

import com.aoh.ghumdim.places.entity.Places;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Places, Integer> {

}
