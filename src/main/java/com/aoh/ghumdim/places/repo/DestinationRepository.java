package com.aoh.ghumdim.places.repo;

import com.aoh.ghumdim.places.entity.Destinations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DestinationRepository extends JpaRepository<Destinations, Integer> {
    @Query("SELECT dest FROM Destinations dest WHERE " +
            "dest.name LIKE %?1%"
            + "OR dest.address LIKE %?1%"
    )
     List<Destinations> findAll(String dest);

    List<Destinations> findDestinationsByCategory(String category);

}
