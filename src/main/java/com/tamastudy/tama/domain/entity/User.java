package com.tamastudy.tama.domain.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User extends BaseEntity {
    @Id @GeneratedValue
    private Long id;

    private String username;

    private String email;

    private String password;

    private String role;
}
