import React from "react";
import { Container } from "react-bootstrap";
import "./LocationGeofenceBanner.css";

const LocationGeofenceBanner = () => {
  return (
    <section className="geo-banner">
      <div className="geo-overlay"></div>

      <Container>
        <div className="geo-content">
          <h2 className="geo-heading">📍 Location & Geofence Alerts</h2>
          <p className="geo-text">
            NetHaven™ lets you see your child’s real-time location and set virtual safety zones, called geofences, 
            around important places like home, school, or a friend’s house. The moment their device enters or 
            leaves one of these zones, you get an instant alert on your dashboard or phone.
            <br /><br />
            Whether it’s confirming they arrived safely at school or knowing if they’ve left an approved area 
            unexpectedly, Location & Geofence Alerts give you peace of mind wherever they go.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default LocationGeofenceBanner;
