package com.personal.site.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.personal.site.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
