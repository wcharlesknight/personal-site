package com.personal.site.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.personal.site.model.User;

@CrossOrigin(origins = "*")
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
