package com.tradiesKraken.ServiceImpl;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.tradiesKraken.Exception.ResourceNotFoundException;
import com.tradiesKraken.Model.Location;
import com.tradiesKraken.Model.User;
import com.tradiesKraken.ModelDto.UserDto;
import com.tradiesKraken.Payload.ModelToDto;
import com.tradiesKraken.Payload.SignUpRequest;
import com.tradiesKraken.Repository.UserRepository;
import com.tradiesKraken.Service.UserService;
import com.tradiesKraken.Repository.LocationRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private ModelToDto modelToDto;

    @Override
    public UserDto create(SignUpRequest userRequest) {

        User user = new User();

        user.setUserId(UUID.randomUUID().toString());
        user.setName(userRequest.getName());
        user.setEmail(userRequest.getEmail());
        user.setPassword(this.passwordEncoder.encode(userRequest.getPassword()));
        user.setPhone(userRequest.getPhone());
        user.setRole(userRequest.getRole());
        user.setAadharNo(userRequest.getAadharNo());
        user.setActive(true);

        Location location = new Location();
        location.setLatitude("13434545134");
        location.setLongitude("546554345");

        location = this.locationRepository.save(location);

        user.setLocation(location);

        return this.modelToDto.user(user);

    }

    @Override
    public List<UserDto> viewAll() {
        List<User> users = this.userRepository.findAll();
        List<UserDto> userDtos = users.stream().map((user) -> this.modelToDto.user(user)).collect(Collectors.toList());
        return userDtos;
    }

    @Override
    public UserDto viewById(String userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));
        return this.modelToDto.user(user);
    }

    @Override
    public void delete(String userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));
        this.userRepository.delete(user);
    }

    @Override
    public UserDto viewByEmail(String email) {
        User user = this.userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));
        UserDto userDto = this.modelToDto.user(user);
        return userDto;
    }

    @Override
    public UserDto update(UserDto userDto, String userId) {
        User oldUser = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));

        oldUser.setName(userDto.getName());
        oldUser.setEmail(userDto.getEmail());
        oldUser.setPhone(userDto.getPhone());
        oldUser.setImageUrl(userDto.getImageUrl());
        oldUser.setCreatedAt(userDto.getCreatedAt());
        oldUser.setAadharNo(userDto.getAadharNo());

        this.userRepository.save(oldUser);

        return this.modelToDto.user(oldUser);
    }

}
