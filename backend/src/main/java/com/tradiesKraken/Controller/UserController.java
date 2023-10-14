package com.tradiesKraken.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tradiesKraken.ModelDto.UserDto;
import com.tradiesKraken.ServiceImpl.FileUploadServiceImpl;
import com.tradiesKraken.ServiceImpl.UserServiceImpl;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private FileUploadServiceImpl fileUploadService;

    private String path = "src/user/profiles";

    @GetMapping("/")
    public ResponseEntity<List<UserDto>> viewAllUsers() {
        return new ResponseEntity<List<UserDto>>(this.userService.viewAll(), HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> viewUserById(@PathVariable String userId) {
        return new ResponseEntity<UserDto>(this.userService.viewById(userId), HttpStatus.OK);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<String> delteteUser(@PathVariable String userId) {
        this.userService.delete(userId);
        return new ResponseEntity<String>("The user is successfully deleted", HttpStatus.OK);
    }

    @GetMapping("/{email}")
    public ResponseEntity<UserDto> viewByEmail(@PathVariable String email) {
        return new ResponseEntity<UserDto>(this.userService.viewByEmail(email), HttpStatus.OK);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto, @PathVariable String userId) {
        return new ResponseEntity<UserDto>(this.userService.update(userDto, userId), HttpStatus.OK);
    }

    @PostMapping("/profile/{userId}")
    public ResponseEntity<UserDto> changeProfile(@PathVariable String userId, @RequestBody MultipartFile file) {
        UserDto user = this.userService.viewById(userId);

        String fileName = this.fileUploadService.uploadImage(path, file);
        user.setImageUrl(fileName);

        return new ResponseEntity<UserDto>(this.userService.update(user, userId), HttpStatus.OK);
    }

}
