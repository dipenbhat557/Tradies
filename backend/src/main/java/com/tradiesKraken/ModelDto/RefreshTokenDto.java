package com.tradiesKraken.ModelDto;

import java.time.Instant;

import lombok.Data;

@Data
public class RefreshTokenDto {

    private int tokenId;

    private String refreshToken;

    private Instant expiry;

    private String userId;
}
