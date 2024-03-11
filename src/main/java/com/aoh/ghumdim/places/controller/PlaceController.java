package com.aoh.ghumdim.places.controller;

import com.aoh.ghumdim.places.dto.PlaceRequestDto;
import com.aoh.ghumdim.places.dto.PlaceResponseDto;
import com.aoh.ghumdim.places.service.RequestService;
import com.aoh.ghumdim.shared.MessageConstant;
import com.aoh.ghumdim.shared.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/form")
@RequiredArgsConstructor
public class PlaceController {
    private final RequestService requestService;

    @GetMapping("/viewAllRequest")
    public List<PlaceResponseDto> getAllRequest(){
        return requestService.getChangeRequest();
    }
    @GetMapping("/viewAllRequest/{field}")
    public List<PlaceResponseDto> getAllRequestSortSevirity(@PathVariable String field){
        return requestService.getChangeRequestWithSortSevirity(field);
    }


    @PostMapping("/createRequest")
    public void CreateRequest(@RequestBody PlaceRequestDto placeRequestDto){
        requestService.createChange(placeRequestDto);
    }

    @GetMapping("/viewRequest/{id}")
    public ResponseEntity<PlaceResponseDto> viewRequestById(@PathVariable Integer id){
        PlaceResponseDto placeResponseDto = requestService.getRequestById(id);
        return new ResponseEntity<>(placeResponseDto, HttpStatus.OK);
    }

    @PostMapping("/updateRequest/{id}")
    public UserResponse updateRequest(@PathVariable Integer id, @RequestBody PlaceRequestDto placeRequestDto){
        requestService.updateRequestForm(id, placeRequestDto);
        return new UserResponse(MessageConstant.SAVED_SUCCESSFULLY);
    }




}
