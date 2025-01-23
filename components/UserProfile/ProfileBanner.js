import React from "react";

const ProfileBanner = ({ profile }) => {
  console.log(profile);

  // If profile is missing, return null (renders nothing)
  if (!profile) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Top banner image */}
      <div className="w-full h-[110px] bg-gray-900 overflow-hidden">
        <img
          src={profile?.coverimage?.url || "/images/default-banner.jpg"}
          alt="Banner"
          className="w-full h-full object-cover opacity-80 grayscale"
        />
      </div>

      {/* Red section with overlapping profile */}
      <div className="relative bg-red-600 w-full h-32">
        {/* Profile circle */}
        <div className="absolute -top-16 left-[110px] w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <img
            src={profile?.profileImage?.url || "/images/default-profile.png"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
