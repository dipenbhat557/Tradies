package com.tradiesKraken.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradiesKraken.Config.JwtHelper;
import com.tradiesKraken.Exception.BadRequestException;
import com.tradiesKraken.Exception.ResourceNotFoundException;
import com.tradiesKraken.Model.User;
import com.tradiesKraken.ModelDto.RefreshTokenDto;
import com.tradiesKraken.ModelDto.UserDto;
import com.tradiesKraken.Payload.JwtRequest;
import com.tradiesKraken.Payload.JwtResponse;
import com.tradiesKraken.Payload.RefreshTokenRequest;
import com.tradiesKraken.Payload.SignUpRequest;
import com.tradiesKraken.Repository.UserRepository;
import com.tradiesKraken.ServiceImpl.RefreshTokenServiceImpl;
import com.tradiesKraken.ServiceImpl.UserServiceImpl;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
// @CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtHelper jwtHelper;

    @Autowired
    private RefreshTokenServiceImpl refreshTokenService;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signin")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {
        // Authenticate the user
        this.authenticateUser(request.getUsername(), request.getPassword());

        // Load user details
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());

        // Generate JWT token
        String token = this.jwtHelper.generateToken(userDetails);

        // Create a refresh token
        RefreshTokenDto refreshTokenDto = this.refreshTokenService.createRefreshToken(userDetails.getUsername());

        // Create a response containing the JWT token and refresh token
        JwtResponse jwtResponse = new JwtResponse();
        jwtResponse.setToken(token);
        jwtResponse.setRefreshToken(refreshTokenDto.getRefreshToken());

        // Get user details and add them to the response
        User user = this.userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));
        jwtResponse.setUser(user);

        return new ResponseEntity<JwtResponse>(jwtResponse, HttpStatus.ACCEPTED);
    }

    private void authenticateUser(String username, String password) {
        try {
            // Attempt to authenticate the user
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (BadCredentialsException e) {
            throw new ResourceNotFoundException("Invalid username or password");
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshJwtToken(@RequestBody RefreshTokenRequest request) {
        // Verify and retrieve the refresh token
        RefreshTokenDto refreshTokenDto = this.refreshTokenService.verifyRefreshToken(request.getRefreshToken());
        String userId = refreshTokenDto.getUserId();

        // Find the user associated with the refresh token
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("The expected user is not found"));

        // Generate a new JWT token
        String token = this.jwtHelper.generateToken(user);

        // Create a response containing the new JWT token and refresh token
        JwtResponse jwtResponse = new JwtResponse(token, refreshTokenDto.getRefreshToken(), user);

        return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<UserDto> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        System.out.println(signUpRequest.getEmail());
        System.out.println(signUpRequest.getPhone());
        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }

        return new ResponseEntity<UserDto>(this.userService.create(signUpRequest), HttpStatus.CREATED);
    }
}
