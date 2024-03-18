package com.aoh.ghumdim.review.entity;

import com.aoh.ghumdim.places.entity.Destinations;
import com.aoh.ghumdim.security.entity.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.Optional;

@Entity
@Getter
@Setter
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String reviewDetail;
    @ManyToOne
    private User user;
    @ManyToOne
    private Destinations destinations;


//    public void setUser(Optional<User> byId) {
//    }
}
