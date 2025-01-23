import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import React, { useContext, useEffect } from "react";

import Module from "./Module";
import ProfileBanner from "./ProfileBanner";

const User = () => {
  const { fetchUser, profile, module, getRequestHandler } = useContext(
    ProfileBuilderContext
  );
  console.log("module ", module);
  useEffect(() => {
    fetchUser();
    getRequestHandler();
  }, []);

  return (
    <div>
      <ProfileBanner profile={profile} />
      <Module module={module} profile={profile} />
    </div>
  );
};

export default User;
