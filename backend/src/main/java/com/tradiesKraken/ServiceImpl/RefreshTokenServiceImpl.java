package com.tradiesKraken.ServiceImpl;

import org.springframework.stereotype.Service;

import com.tradiesKraken.ModelDto.RefreshTokenDto;
import com.tradiesKraken.Service.RefreshTokenService;

@Service
public class RefreshTokenServiceImpl implements RefreshTokenService {

    @Override
    public RefreshTokenDto createRefreshToken(String username) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createRefreshToken'");
    }

    @Override
    public RefreshTokenDto verifyRefreshToken(String providedRefreshToken) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'verifyRefreshToken'");
    }

}
