package com.aoh.ghumdim;

import com.aoh.ghumdim.security.auth.RegisterRequestDto;
import com.aoh.ghumdim.security.entity.Role;
import com.aoh.ghumdim.security.repo.UserRepository;
import com.aoh.ghumdim.security.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
@Slf4j
public class GhumdimApplication implements CommandLineRunner{

	private final AuthenticationService authenticationService;
	private final UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(GhumdimApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		if(userRepository.findAll().isEmpty()) {
			RegisterRequestDto user = RegisterRequestDto.builder()
					.firstname("ankit")
					.lastname("nepal")
					.email("ankitnep001@aoh.aoh")
					.password("nepal")
					.role(Role.ADMIN)
					.age(15)
					.location("chabhiel")
					.build();
			log.info("creating ankit user");
			authenticationService.register(user);

			user = RegisterRequestDto.builder()
					.firstname("ajay")
					.lastname("paudel")
					.email("ajay@aoh.aoh")
					.password("nepal")
					.role(Role.ADMIN)
					.age(15)
					.location("chabhiel")
					.build();
			log.info("creating ajay user");

			authenticationService.register(user);
			user = RegisterRequestDto.builder()
					.firstname("basanta")
					.lastname("chor")
					.email("vaxo@aoh.aoh")
					.password("nepal")
					.role(Role.ADMIN)
					.age(15)
					.location("chabhiel")
					.build();
			log.info("creating basanta user");
			authenticationService.register(user);
		}

	}
}
