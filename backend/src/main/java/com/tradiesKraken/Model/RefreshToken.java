package com.tradiesKraken.Model;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RefreshToken {

    public RefreshToken(String refreshToken, Instant expiry, User user) {
        this.refreshToken = refreshToken;
        this.expiry = expiry;
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int tokenId;

    private String refreshToken;

    private Instant expiry;

    @OneToOne
    private User user;

}
