package com.tradiesKraken.Service;

import com.tradiesKraken.ModelDto.RefreshTokenDto;

public interface RefreshTokenService {

    public RefreshTokenDto createRefreshToken(String username);

    public RefreshTokenDto verifyRefreshToken(String providedRefreshToken);
}
