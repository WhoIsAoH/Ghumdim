package com.aoh.ghumdim.shared;

import com.aoh.ghumdim.GhumdimApplication;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Objects;

@Configuration
public class CommonConfiguration {

//    @Bean
//    public void firebaseConfiguration() throws IOException {
//    ClassLoader classLoader = GhumdimApplication.class.getClassLoader();
//    File file = new File(Objects.requireNonNull(classLoader.getResource("serviceAccountKey.json")).getFile());
//    FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());
//        FirebaseOptions options = new FirebaseOptions.Builder()
//                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
//                .build();
//        FirebaseApp.initializeApp(options );
//    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
    @Bean
    public JavaMailSender mailSender(){
        return new JavaMailSenderImpl();
    }
}
