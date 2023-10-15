package com.tradiesKraken.Service;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Service;
// import org.springframework.web.client.RestTemplate;

// import com.tradiesKraken.Payload.GeocodingResponse;

// @Service
// public class GeocodingService {
// @Value("${google.maps.apiKey}") // Load your API key from
// application.properties
// private String apiKey;

// public GeocodingResponse getCoordinatesForZipcode(String zipCode) {
// System.out.println(apiKey);
// System.out.println(zipCode);
// String url = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
// zipCode + "&key=" + apiKey;
// RestTemplate restTemplate = new RestTemplate();
// return restTemplate.getForObject(url, GeocodingResponse.class);
// }
// }
