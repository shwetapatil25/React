import React from "react";
import "./ProfilePicture.css";
import defaultImage from "../assets/Shweta.jpg"; // Import a local image as a fallback

// ProfilePicture Component
const ProfilePicture = ({ picture }) => {
  // Function to handle image load errors (e.g., if the URL is broken)
  const handleImageError = (event) => {
    event.target.src = defaultImage; // Fallback to the local image
  };

  return (
    <div className="profile-picture-container">
      {/* Display the profile picture */}
      <img
        className="profile-picture"
        src={picture || defaultImage} // Use the picture prop or default image
        alt="User Profile"
        onError={handleImageError} // Handle image loading errors
      />
    </div>
  );
};

export default ProfilePicture;

