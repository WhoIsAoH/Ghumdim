package com.aoh.ghumdim.places.controller;

import com.aoh.ghumdim.places.dto.DestinationRequestDto;
import com.aoh.ghumdim.places.dto.DestinationResponseDto;
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
public class DestinationController {
    private final RequestService requestService;

    @GetMapping("/viewAllDestination")
    public List<DestinationResponseDto> getAllDestination(){
        return requestService.getChangeRequest();
    }


    @PostMapping("/createDestination")
    public void createDestination(@RequestBody DestinationRequestDto placeRequestDto){
        requestService.createChange(placeRequestDto);
    }

    @GetMapping("/viewDestination/{id}")
    public ResponseEntity<DestinationResponseDto> viewDestination(@PathVariable Integer id){
        DestinationResponseDto placeResponseDto = requestService.getRequestById(id);
        return new ResponseEntity<>(placeResponseDto, HttpStatus.OK);
    }

    @PostMapping("/updateDestination/{id}")
    public UserResponse updateDestination(@PathVariable Integer id, @RequestBody DestinationRequestDto placeRequestDto){
        requestService.updateRequestForm(id, placeRequestDto);
        return new UserResponse(MessageConstant.SAVED_SUCCESSFULLY);
    }




}
