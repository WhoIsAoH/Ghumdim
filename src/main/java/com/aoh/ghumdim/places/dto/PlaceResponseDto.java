package com.aoh.ghumdim.places.dto;

import com.aoh.ghumdim.security.entity.User;
import com.aoh.ghumdim.shared.Category;
import com.aoh.ghumdim.shared.DestinationStatus;
import com.aoh.ghumdim.shared.ProgressStatus;
import com.aoh.ghumdim.shared.Severity;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
//@JsonIgnoreProperties
public class PlaceResponseDto {
    private Integer id;


//    @JsonIgnore
//    private User author;
//    private Integer authorId;
    private String name;
    private String address;
    private Category category;
    private Integer latitude;
    private Integer Integeritude;
    private DestinationStatus status;
}
