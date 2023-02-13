package com.example.Flipkart_Clone.repositories;

import com.example.Flipkart_Clone.model.signUp;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface signUpRepo extends CrudRepository<signUp,Long> {
}
