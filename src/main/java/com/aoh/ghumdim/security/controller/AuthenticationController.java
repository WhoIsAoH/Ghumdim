package com.aoh.ghumdim.security.controller;



import com.aoh.ghumdim.security.auth.AuthenticationRequest;
import com.aoh.ghumdim.security.auth.AuthenticationResponse;
import com.aoh.ghumdim.security.auth.RegisterRequest;
import com.aoh.ghumdim.security.service.AuthenticationService;
import com.aoh.ghumdim.shared.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    @PostMapping("/register")
    public UserResponse register(@RequestBody @Validated RegisterRequest request){
        return service.register(request);
    }

    @PostMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestBody AuthenticationRequest request
    ){
        return service.authenticate(request);

    }

}
