package com.example.Flipkart_Clone.repositories;

import com.example.Flipkart_Clone.model.signIn;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface signInRepo extends CrudRepository<signIn,Long> {
}
