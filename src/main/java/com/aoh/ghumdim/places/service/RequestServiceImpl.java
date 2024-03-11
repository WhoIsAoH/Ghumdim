package com.aoh.ghumdim.places.service;

import com.aoh.ghumdim.places.dto.PlaceRequestDto;
import com.aoh.ghumdim.places.dto.PlaceResponseDto;
import com.aoh.ghumdim.places.entity.Places;
import com.aoh.ghumdim.places.repo.PlaceRepository;
import com.aoh.ghumdim.security.entity.User;
import com.aoh.ghumdim.security.repo.UserRepository;
import com.aoh.ghumdim.shared.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class RequestServiceImpl implements RequestService {

    private final PlaceRepository placeRepository;

    private final ModelMapperService modelMapperService;

    private final UserRepository userRepository;


    @Override
    public List<PlaceResponseDto> getChangeRequest() {
        List<Places> places = placeRepository.findAll();
        return modelMapperService.entityToListDto(places);
    }

    @Override
    public List<PlaceResponseDto> getChangeRequestWithSortSevirity(@PathVariable String field) {
        List<Places> places = placeRepository.findAll(Sort.by(Sort.Direction.ASC, field));
        return modelMapperService.entityToListDto(places);
    }

    @Override
    public void createChange(PlaceRequestDto placeRequestDto) {
        log.info("creating change request");
        Places places = modelMapperService.crfRequestDtoToChangeForm(placeRequestDto);
        log.info("author ko kuraa");
        log.info(String.valueOf(placeRequestDto.getAuthor()));
        Optional<User> mapUser = userRepository.findById(placeRequestDto.getAuthor());
        places.setAuthor(mapUser.get());
//        places.setAssignTo(mapUser.get());
        log.info("testing ");
        placeRepository.save(places);

    }

    @Override
    public PlaceResponseDto getRequestById(Integer id) {
        Places places = placeRepository.findById(id)
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

    public void updateRequestForm(Integer id, PlaceRequestDto placeRequestDto) {
        Places existingRequest = placeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(placeRequestDto.getName()));
        Places updatedRequest = modelMapperService.crfRequestDtoToChangeForm(placeRequestDto);
//        existingRequest.setTopic(updatedRequest.getTopic());
//        existingRequest.setDepartment(updatedRequest.getDepartment());
//        existingRequest.setAssignTo(updatedRequest.getAssignTo());
//        existingRequest.setReviewer(updatedRequest.getReviewer());
//        existingRequest.setSeverity(updatedRequest.getSeverity());
//        existingRequest.setEndDate(updatedRequest.getEndDate());
//        existingRequest.setDescription(updatedRequest.getDescription());
//        existingRequest.setImpact(updatedRequest.getImpact());
//        existingRequest.setRollBack(updatedRequest.getRollBack());
        placeRepository.save(existingRequest);
//        return modelMapperService.changeFormToCRFRequestDto(existingRequest);
    }
}
