package com.aoh.ghumdim.places.entity;

import com.aoh.ghumdim.security.entity.User;
import com.aoh.ghumdim.shared.Category;
import com.aoh.ghumdim.shared.DestinationStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Destinations {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //many to one mapping

    private String name;
    private String address;
    private Category category;
    private Double latitude;
    private Double Longitude;
    private DestinationStatus status;
    private String contactNumber;
    private String photo;
    private double rating;


    @ManyToOne(cascade = CascadeType.ALL)
    private User author;

}
