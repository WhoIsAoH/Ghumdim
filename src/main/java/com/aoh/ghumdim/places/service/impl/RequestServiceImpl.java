package com.aoh.ghumdim.places.service.impl;

import com.aoh.ghumdim.places.service.ImageService;
import com.aoh.ghumdim.places.dto.DestinationRequestDto;
import com.aoh.ghumdim.places.dto.DestinationResponseDto;
import com.aoh.ghumdim.places.entity.Destinations;
import com.aoh.ghumdim.places.repo.DestinationRepository;
import com.aoh.ghumdim.places.service.ModelMapperService;
import com.aoh.ghumdim.places.service.RequestService;
import com.aoh.ghumdim.security.entity.User;
import com.aoh.ghumdim.security.repo.UserRepository;
import com.aoh.ghumdim.shared.DistanceCalculatorService;
import com.aoh.ghumdim.shared.MessageConstant;
import com.aoh.ghumdim.shared.UserResponse;
import com.aoh.ghumdim.shared.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class RequestServiceImpl implements RequestService {

    private final DestinationRepository placeRepository;

    private final ModelMapperService modelMapperService;

    private final UserRepository userRepository;
    private final ImageService imageService;
    private final DistanceCalculatorService distanceCalculatorService;


    @Override
    public List<DestinationResponseDto> getDestinationDetail() {
        List<Destinations> places = placeRepository.findAll();
        return modelMapperService.entityToListDto(places);
    }

    @Override
    public List<DestinationResponseDto> getDestinationDetailWithSortSevirity(@PathVariable String field) {
        List<Destinations> places = placeRepository.findAll(Sort.by(Sort.Direction.ASC, field));
        return modelMapperService.entityToListDto(places);
    }

    @Override
    public UserResponse createDestination(DestinationRequestDto placeRequestDto, MultipartFile multipartFile) {
//        Photos photos = new Photos();
//        photos.setPhoto(imageService.upload(multipartFile));
//        imageRepository.save(photos);
        log.info("creating change request");
        Destinations places = modelMapperService.crfRequestDtoToChangeForm(placeRequestDto);
        log.info("author ko kuraa");
        log.info(String.valueOf(placeRequestDto.getAuthor()));
        Optional<User> mapUser = userRepository.findById(placeRequestDto.getAuthor());
        places.setAuthor(mapUser.get());
        log.info("testing ");
        places.setPhoto(imageService.upload(multipartFile));

        placeRepository.save(places);
        return new UserResponse(MessageConstant.SAVED_SUCCESSFULLY+ places.getPhoto());

    }

    @Override
    public DestinationResponseDto getDestinationById(Integer id) {
        Destinations places = placeRepository.findById(id)
                .orElseThrow(() -> {
                log.error("got error" );
                throw new RuntimeException("error finding id with" + id);
                });
        //user object
        //user id
        log.info("printing dto by id");
        log.info(String.valueOf(places.getAuthor().getId()));
        return modelMapperService.changeFormToCRFRequestDto(places);
    }

    public UserResponse updateDestination(Integer id, DestinationRequestDto placeRequestDto) {
        Destinations destination = placeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(placeRequestDto.getName()));
        Destinations updatedDestination = modelMapperService.crfRequestDtoToChangeForm(placeRequestDto);
        destination.setName(updatedDestination.getName());
        destination.setAddress(updatedDestination.getAddress());
        destination.setCategory(updatedDestination.getCategory());
        destination.setLatitude(updatedDestination.getLatitude());
        destination.setLongitude(updatedDestination.getLongitude());
        destination.setContactNumber(updatedDestination.getContactNumber());
        destination.setDescription(updatedDestination.getDescription());
        placeRepository.save(destination);
        return new UserResponse(MessageConstant.SAVED_SUCCESSFULLY);
    }
    @Override
    public List<DestinationResponseDto> getDestinationsSortedByDistance(double userLatitude, double userLongitude) {
        List<Destinations> allDestinations = placeRepository.findAll();
        List<Destinations> sortedDestinations = allDestinations.stream()
                .sorted(Comparator.comparingDouble(destination ->
                         distanceCalculatorService.calculateDistance(destination.getLatitude(), destination.getLongitude(), userLatitude, userLongitude)))
                .collect(Collectors.toList());
        return modelMapperService.entityToListDto(sortedDestinations);
    }



}
