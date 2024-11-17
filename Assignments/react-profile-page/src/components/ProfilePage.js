import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileDetails from "./ProfileDetails";
import "./ProfilePage.css";

const ProfilePage = () => {
  // User data
  const user = {
    picture: "./Shweta.jpg",
    name: "Shweta Patil",
    email: "shwetaspatil.2503@gmail.com",
    bio: "I am currently pursuing a Master of Computer Applications (MCA), with a strong focus on software development, web technologies."
  };

  return (
    <div className="profile-page">
      <ProfilePicture picture={user.picture} />
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
    </div>
  );
};

export default ProfilePage;
