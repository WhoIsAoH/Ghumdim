package com.aoh.ghumdim.places.service;

import com.aoh.ghumdim.places.dto.DestinationRequestDto;
import com.aoh.ghumdim.places.dto.DestinationResponseDto;
import com.aoh.ghumdim.places.entity.Destinations;
import com.aoh.ghumdim.places.repo.DestinationRepository;
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

    private final DestinationRepository placeRepository;

    private final ModelMapperService modelMapperService;

    private final UserRepository userRepository;


    @Override
    public List<DestinationResponseDto> getChangeRequest() {
        List<Destinations> places = placeRepository.findAll();
        return modelMapperService.entityToListDto(places);
    }

    @Override
    public List<DestinationResponseDto> getChangeRequestWithSortSevirity(@PathVariable String field) {
        List<Destinations> places = placeRepository.findAll(Sort.by(Sort.Direction.ASC, field));
        return modelMapperService.entityToListDto(places);
    }

    @Override
    public void createChange(DestinationRequestDto placeRequestDto) {
        log.info("creating change request");
        Destinations places = modelMapperService.crfRequestDtoToChangeForm(placeRequestDto);
        log.info("author ko kuraa");
        log.info(String.valueOf(placeRequestDto.getAuthor()));
        Optional<User> mapUser = userRepository.findById(placeRequestDto.getAuthor());
        places.setAuthor(mapUser.get());
//        places.setAssignTo(mapUser.get());
        log.info("testing ");
        placeRepository.save(places);

    }

    @Override
    public DestinationResponseDto getRequestById(Integer id) {
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

    public void updateRequestForm(Integer id, DestinationRequestDto placeRequestDto) {
        Destinations existingRequest = placeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(placeRequestDto.getName()));
        Destinations updatedRequest = modelMapperService.crfRequestDtoToChangeForm(placeRequestDto);
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
