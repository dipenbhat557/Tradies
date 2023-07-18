package com.tradies.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradies.Exception.ResourceNotFoundException;
import com.tradies.Model.User;
import com.tradies.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User create(User user){
        return this.userRepository.save(user);
    }
    
    public List<User> viewAllUsers(){
        return this.userRepository.findAll();
    }

    public User viewById(int userId){
        return this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));
    }

    public void deleteUser(int userId){
        this.userRepository.delete(this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("The expected user is not found")));
    }

    public User update(User user, int userId){
        User oldUser = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));

        oldUser.setName(user.getName());

        this.userRepository.save(oldUser);

        return oldUser;
    }

}
