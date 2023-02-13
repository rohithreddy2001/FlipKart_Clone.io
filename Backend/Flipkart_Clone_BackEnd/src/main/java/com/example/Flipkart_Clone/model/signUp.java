package com.example.Flipkart_Clone.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class signUp {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @NotNull
    @NotBlank
    @Size(min = 5,max = 30,message = "First Name should be in the range of min-5 and max-30")
    private String f_name;

    @NotNull
    @NotBlank
    @Size(min = 5,max = 30,message = "Last Name should be in the range of min-5 and max-30")
    private String l_name;

    @NotNull
    @NotBlank
    private String mail;

    @NotNull
    @NotBlank
    @Size(min = 8,max = 28,message = "Password should be in the range of 8 to 28")
    private String createPassword;

    @NotNull
    @NotBlank
    @Size(min = 8,max = 28,message = "Password should be in the range of 8 to 28")
    private String confirmPassword;

    public String getF_name() {
        return f_name;
    }

    public void setF_name(String f_name) {
        this.f_name = f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getCreatePassword() {
        return createPassword;
    }

    public void setCreatePassword(String createPassword) {
        this.createPassword = createPassword;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
