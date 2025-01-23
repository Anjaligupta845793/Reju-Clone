import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import React, { useContext, useEffect, useState } from "react";

import Module from "./Module";
import ProfileBanner from "./ProfileBanner";

const User = () => {
  const { fetchUser, profile, module, getRequestHandler } = useContext(
    ProfileBuilderContext
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      await fetchUser();
      await getRequestHandler();
      setLoading(false); // Stop loading after fetching data
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? ( // Show loader while loading
        <div className="flex justify-center max-w-[300px] mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 rounded-full border-4 border-yellow-500 border-t-2 border-t-black animate-spin"></div>
          </div>
        </div>
      ) : profile ? ( // Show profile if available
        <div>
          <ProfileBanner profile={profile} />
          <Module module={module} profile={profile} />
          <div className="text-center">
            <h1 className="text-[10px]">
              POWERED BY{" "}
              <span className="font-bold text-lg md:text-xl">REJU</span>
            </h1>
            <p className="text-[13px] font-bold ">
              {`${profile.name}'s Privacy Policy`}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No profile found</p> // Handle missing profile case
      )}
    </div>
  );
};

export default User;
