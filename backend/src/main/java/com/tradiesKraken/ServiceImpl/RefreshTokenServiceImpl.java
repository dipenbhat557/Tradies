package com.tradiesKraken.ServiceImpl;

import java.time.Instant;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradiesKraken.Repository.RefreshTokenRepository;
import com.tradiesKraken.Repository.UserRepository;
import com.tradiesKraken.Service.RefreshTokenService;
import com.tradiesKraken.Exception.ResourceNotFoundException;
import com.tradiesKraken.Model.RefreshToken;
import com.tradiesKraken.Model.User;
import com.tradiesKraken.ModelDto.RefreshTokenDto;
import com.tradiesKraken.Payload.ModelToDto;

@Service
public class RefreshTokenServiceImpl implements RefreshTokenService {

    // Define the validity period of the refresh token (in milliseconds)
    public long refreshTokenValidity = 5 * 60 * 60 * 1000; // 5 hours

    @Autowired
    private RefreshTokenRepository refreshTokenRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelToDto ModelToDto;

    @Override
    public RefreshTokenDto createRefreshToken(String username) {
        // Find the user by their email (username)
        User user = this.userRepository.findByEmail(username).orElseThrow(
                () -> new ResourceNotFoundException("The expected user while generating refresh token is not found"));

        // Get the user's existing refresh token, if it exists
        RefreshToken refreshToken = user.getRefreshToken();

        System.out.println("Refresh token is " + refreshToken);
        if (refreshToken == null) {
            // If no existing refresh token, create a new one with a unique ID and set its
            // expiry time
            System.out.println("Inside null");
            refreshToken = new RefreshToken(UUID.randomUUID().toString(),
                    Instant.now().plusMillis(refreshTokenValidity), user);
        } else {
            // If an existing refresh token is found, update its expiry time
            refreshToken.setExpiry(Instant.now().plusMillis(refreshTokenValidity));
        }
        System.out.println("Refresh token1 is " + refreshToken);

        // Save the refresh token to the database
        this.refreshTokenRepository.save(refreshToken);

        System.out.println("Refresh token11 is " + refreshToken);
        // Convert the refresh token entity to a DTO and return it
        return ModelToDto.refreshToken(refreshToken);
    }

    @Override
    public RefreshTokenDto verifyRefreshToken(String providedRefreshToken) {
        // Find the refresh token by the provided token value
        RefreshToken refreshToken = this.refreshTokenRepository.findByRefreshToken(providedRefreshToken)
                .orElseThrow(() -> new ResourceNotFoundException("The expected refresh token is not found"));

        // Check if the refresh token has expired
        if (refreshToken.getExpiry().compareTo(Instant.now()) < 0) {
            try {
                // If expired, delete the token from the database
                this.refreshTokenRepository.delete(refreshToken);
            } catch (Exception e) {
                e.printStackTrace();
            }
            throw new ResourceNotFoundException("The provided refresh token has expired.");
        }

        // Convert the refresh token entity to a DTO and return it
        return ModelToDto.refreshToken(refreshToken);
    }
}