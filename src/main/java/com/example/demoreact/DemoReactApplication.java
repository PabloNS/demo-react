package com.example.demoreact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoReactApplication {

	@GetMapping(produces = "application/json")
	@CrossOrigin(origins = "http://localhost:3000")
	public String helloWorld(){
		return "{\"greeting\":\"Hello World!\"}";
	}

	public static void main(String[] args) {
		SpringApplication.run(DemoReactApplication.class, args);
	}

}
