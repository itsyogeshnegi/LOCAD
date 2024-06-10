"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const AnalyticsMap = () => {
  const containerStyle = {
    width: "350px",
    height: "350px",
  };

  const locations = [
    { lat: 28.7041, lng: 77.1025 }, // Delhi
    { lat: 19.076, lng: 72.8777 }, // Mumbai
    { lat: 22.5726, lng: 88.3639 }, // Kolkata
    { lat: 13.0827, lng: 80.2707 }, // chennai
    { lat: 22.6708, lng: 71.5724 }, // Gujrat
    { lat: 27.0238, lng: 74.2179 }, // Rajasthan
    { lat: 15.9129, lng: 79.74 }, // Andhra Pradesh
    { lat: 30.0668, lng: 79.0193 }, // Uttarakhand
    { lat: 18.1124, lng: 79.0193 }, // Telangana
    { lat: 22.9734, lng: 78.6569 }, // Madhya Pradesh
    { lat: 15.3173, lng: 75.7139 }, // Karnataka
    { lat: 15.2993, lng: 74.124 }, // Goa
    { lat: 22.9868, lng: 87.855 }, // West Bengal
    { lat: 27.5706, lng: 80.0982 }, // Uttar Pradesh
    { lat: 25.9644, lng: 85.2722 }, // Bihar
    { lat: 26.2006, lng: 92.9376 }, // Assam
    { lat: 21.2787, lng: 81.8661 }, // Chhattisgarh
    { lat: 20.2376, lng: 84.2700 }, // Odisha

  ];



  const center = {
    lat: 20.5937,
    lng: 78.9629,
  };

  return (
    <div>
        <LoadScript googleMapsApiKey="AIzaSyDj0lUV-8zun12iUwHxDt1kcYVUJyoxw0o">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={3.8}>
            {locations.map((location, index) => (
              <Marker key={index} position={location} />
            ))}
          </GoogleMap>
        </LoadScript>
    </div>
  );
};

export default AnalyticsMap;
