package com.tradiesKraken.Payload;

import com.tradiesKraken.Model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {

    private String token;
    private String refreshToken;
    private User user;

}
