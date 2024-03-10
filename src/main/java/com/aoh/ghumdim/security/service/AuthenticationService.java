package com.aoh.ghumdim.security.service;

import com.aoh.ghumdim.security.auth.AuthenticationRequest;
import com.aoh.ghumdim.security.auth.AuthenticationResponse;
import com.aoh.ghumdim.security.auth.RegisterRequest;
import com.aoh.ghumdim.security.entity.User;
import com.aoh.ghumdim.security.repo.UserRepository;
import com.aoh.ghumdim.shared.MessageConstant;
import com.aoh.ghumdim.shared.UserResponse;
import com.aoh.ghumdim.shared.exception.UserAlreadyExistException;
import com.aoh.ghumdim.shared.exception.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public UserResponse register(RegisterRequest request) {
            Optional<User> optionalUser = repository.findByEmail(request.getEmail());
            if (optionalUser.isPresent()) {
                log.info("user registered already");
                throw new UserAlreadyExistException(MessageConstant.ALREADY_REGISTER_USER);
            }
                log.info("NoDuplicateEmail");
                var user = User.builder()
                        .firstname(request.getFirstname())
                        .lastname(request.getLastname())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))

//                .role(Role.ADMIN)
                        .role(request.getRole())
                        .build();
                repository.save(user);
                var jwtToken = jwtService.generateToken(user);
                AuthenticationResponse jwt = new AuthenticationResponse(jwtToken);
//                return ResponseEntity.ok(jwtToken);
                return new UserResponse(MessageConstant.SAVED_SUCCESSFULLY);
    }
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        log.info("login or authenticating");
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(), request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(()->{
                    log.error("User Not Found");
                    throw new UserNotFoundException("User Not Found!! Create user first");
                            }
                        );
        var jwtToken = jwtService.generateToken(user);
//        log.info();
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
