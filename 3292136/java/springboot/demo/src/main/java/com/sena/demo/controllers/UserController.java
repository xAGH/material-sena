package com.sena.demo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sena.demo.models.User;

@RestController
@RequestMapping("user")
public class UserController {

    @GetMapping
    public User getUsers() {
        User user = new User("1", "Alejo", "alejo@mail.com", 23, "34872347");
        ResponseEntity<User> response = new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
        return user;
    }

}
