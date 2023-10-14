package com.tradiesKraken.Service;

import java.util.List;

import com.tradiesKraken.ModelDto.UserDto;
import com.tradiesKraken.Payload.SignUpRequest;

public interface UserService {
    public UserDto create(SignUpRequest userRequest);

    public List<UserDto> viewAll();

    public UserDto viewById(String userId);

    public void delete(String email);

    public UserDto viewByEmail(String email);

    public UserDto update(UserDto userDto, String userId);

    public List<UserDto> viewByRole(String role);
}
