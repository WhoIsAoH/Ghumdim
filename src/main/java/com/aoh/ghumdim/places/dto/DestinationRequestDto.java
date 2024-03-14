package com.aoh.ghumdim.places.dto;

import com.aoh.ghumdim.shared.Category;
import com.aoh.ghumdim.shared.DestinationStatus;
import com.aoh.ghumdim.shared.Severity;
import com.fasterxml.jackson.annotation.JsonAlias;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.Date;

@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
//@JsonIgnoreProperties
public class DestinationRequestDto {
    @NotNull(message = "topic is must required ")
    @Pattern(regexp = "^[a-zA-Z0-9\\s]{2,100}$", message = "Topic must contain only letters, numbers, and spaces and be between 2 and 100 characters Integer")
    private String name;
    private String address;
    private Category category;
    private Integer latitude;
    private Integer Longitude;
    private DestinationStatus status;

    @JsonAlias("author_id")
    private Integer author;
}
