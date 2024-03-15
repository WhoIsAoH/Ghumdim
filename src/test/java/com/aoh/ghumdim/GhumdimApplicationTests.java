package com.aoh.ghumdim;

import com.aoh.ghumdim.security.auth.RegisterRequestDto;
import com.aoh.ghumdim.security.entity.Role;
import com.aoh.ghumdim.security.repo.UserRepository;
import com.aoh.ghumdim.security.service.AuthenticationService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest

class GhumdimApplicationTests implements CommandLineRunner {
	private final AuthenticationService authenticationService;
	private final UserRepository userRepository;

	public GhumdimApplicationTests(AuthenticationService authenticationService, UserRepository userRepository) {
		this.authenticationService = authenticationService;
		this.userRepository = userRepository;
	}

	@Test
	void contextLoads() {
	}

	@Override
	public void run(String... args) throws Exception {
		if(userRepository.findAll().isEmpty()) {
			var user = RegisterRequestDto.builder()
					.firstname("ankit")
					.lastname("nepal")
					.email("ankitnep001@gmail.com")
					.password("nepal")
					.role(Role.ADMIN)
					.age(15)
					.location("chabhiel")
					.build();
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
			authenticationService.register(user);

		}

	}
}
