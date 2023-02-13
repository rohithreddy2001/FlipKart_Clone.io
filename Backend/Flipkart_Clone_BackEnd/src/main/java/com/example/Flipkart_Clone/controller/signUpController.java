package com.example.Flipkart_Clone.controller;


import com.example.Flipkart_Clone.model.signUp;
import com.example.Flipkart_Clone.repositories.signUpRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class signUpController {

    @Autowired
    signUpRepo userRepo;

    @PostMapping("/addUser")
    public ResponseEntity<?> addUsers(@RequestBody @Validated signUp user, BindingResult  result) {
        if(result.hasErrors()) {
            HashMap<String,String> errorMap = new HashMap<>();
            for(FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(),error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userRepo.save(user),HttpStatus.ACCEPTED);
    }
}
