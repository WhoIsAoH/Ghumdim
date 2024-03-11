package com.aoh.ghumdim.places.service;

import com.aoh.ghumdim.places.dto.PlaceRequestDto;
import com.aoh.ghumdim.places.dto.PlaceResponseDto;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface RequestService {
    void createChange(PlaceRequestDto placeRequestDto);

    List<PlaceResponseDto> getChangeRequest();

    PlaceResponseDto getRequestById(Integer id);

    void updateRequestForm(Integer id, PlaceRequestDto placeRequestDto);
    List<PlaceResponseDto> getChangeRequestWithSortSevirity(@PathVariable String field);


}
