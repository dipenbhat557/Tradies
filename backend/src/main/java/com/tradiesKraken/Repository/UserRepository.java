package com.tradiesKraken.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradiesKraken.Model.User;

public interface UserRepository extends JpaRepository<User, String> {

    public Optional<User> findByEmail(String email);

    public Boolean existsByEmail(String email);

    public List<User> findByRole(String role);
}
