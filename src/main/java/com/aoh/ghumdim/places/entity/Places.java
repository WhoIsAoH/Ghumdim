package com.aoh.ghumdim.places.entity;

import com.aoh.ghumdim.security.entity.User;
import com.aoh.ghumdim.shared.Category;
import com.aoh.ghumdim.shared.DestinationStatus;
import com.aoh.ghumdim.shared.ProgressStatus;
import com.aoh.ghumdim.shared.Severity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Places {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    //many to one mapping

    private String name;
    private String address;
    private Category category;
    private Integer latitude;
    private Integer Integeritude;
    private DestinationStatus status;


    //addd imagesss;
    //list of images.. use firebase
    //creation email;


    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name="author_id")
    private User author;

}
