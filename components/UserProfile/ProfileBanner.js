import React from "react";

const ProfileBanner = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Top banner image */}
      <div className={`w-full h-[110px]  overflow-hidden`}>
        <img
          src={profile?.coverimage?.url || "/images/default-banner.jpg"}
          alt="Banner"
          className="w-full h-full object-cover opacity-80 grayscale"
        />
      </div>

      {/* Profile section */}
      <div className={`relative  w-full h-32 flex flex-col items-center`}>
        {/* Profile image (circular) */}
        <div className="absolute -top-16 w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <img
            src={profile?.profileImage?.url || "/images/default-profile.png"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Logo Section */}
        <div className="mt-20 flex flex-col items-center">
          {profile.displayNameOrLogo && profile.displayName ? (
            <p className={`text-lg font-semibold `}>{profile.displayTitle}</p>
          ) : profile.displayNameOrLogo ? (
            <img
              src={
                profile?.displayLogoImage?.url || "/images/default-profile.png"
              }
              alt="Logo"
              className="w-20 h-20 object-contain mt-2"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
