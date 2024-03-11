package com.aoh.ghumdim.places.service;

import com.aoh.ghumdim.places.dto.PlaceRequestDto;
import com.aoh.ghumdim.places.dto.PlaceResponseDto;
import com.aoh.ghumdim.places.entity.Places;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@Slf4j
@RequiredArgsConstructor
public class ModelMapperService {

    private final ModelMapper modelMapper;

    public Places crfRequestDtoToChangeForm(PlaceRequestDto placeRequestDto){
        return modelMapper.map(placeRequestDto, Places.class);
    }

    public PlaceResponseDto changeFormToCRFRequestDto(Places places){
        PlaceResponseDto placeResponseDto = this.modelMapper.map(places, PlaceResponseDto.class);
//        placeResponseDto.setAuthorId(places.getAuthor().getId());
//        log.info(String.valueOf(placeResponseDto.getAuthorId()));
        return placeResponseDto;
    }

    public List<PlaceResponseDto> entityToListDto(List<Places> places){
        return places.stream().map(this:: changeFormToCRFRequestDto).collect(Collectors.toList());
    }
}
