package com.example.Flipkart_Clone.controller;

import com.example.Flipkart_Clone.model.signIn;
import com.example.Flipkart_Clone.repositories.signInRepo;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/Users")
@CrossOrigin
public class signInController {

    @Autowired
    signInRepo UsersRepo;

    @PostMapping("/allowUsers")
    public ResponseEntity<?> allowUsers(@RequestBody @Validated signIn Users, BindingResult result) {
        if(result.hasErrors()) {
            HashMap<String,String> errorMap = new HashMap<>();
            for(FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(),error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(UsersRepo.save(Users),HttpStatus.ACCEPTED);
    }
}
