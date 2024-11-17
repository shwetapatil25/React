import React from "react";
import "./ProfileDetails.css";

const ProfileDetails = ({ name, email, bio }) => {
  return (
    <div className="profile-details">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default ProfileDetails;
