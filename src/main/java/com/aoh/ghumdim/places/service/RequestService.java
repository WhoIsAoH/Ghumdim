package com.aoh.ghumdim.places.service;

import com.aoh.ghumdim.places.dto.DestinationRequestDto;
import com.aoh.ghumdim.places.dto.DestinationResponseDto;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface RequestService {
    void createChange(DestinationRequestDto placeRequestDto);

    List<DestinationResponseDto> getChangeRequest();

    DestinationResponseDto getRequestById(Integer id);

    void updateRequestForm(Integer id, DestinationRequestDto placeRequestDto);
    List<DestinationResponseDto> getChangeRequestWithSortSevirity(@PathVariable String field);


}
