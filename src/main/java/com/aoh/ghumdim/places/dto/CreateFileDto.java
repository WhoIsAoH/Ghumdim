package com.aoh.ghumdim.places.dto;

import com.aoh.ghumdim.shared.Category;
import com.aoh.ghumdim.shared.DestinationStatus;
import com.fasterxml.jackson.annotation.JsonAlias;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class CreateFileDto {
  @Pattern(regexp = "^[a-zA-Z0-9\\s]{2,100}$", message = "Topic must contain only letters, numbers, and spaces and be between 2 and 100 characters Integer")
  private String name;
  private String address;
  private Category category;
  private Double latitude;
  private Double Longitude;
  private DestinationStatus status;
  private String contactNumber;

  private double rating;

  private String description;
  @JsonAlias("author_id")
  private Integer author;

  private byte[] fileData;
}
