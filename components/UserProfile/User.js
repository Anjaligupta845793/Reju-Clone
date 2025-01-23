import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import React, { useContext, useEffect } from "react";
import Loader from "../Loader";
import Module from "./Module";
import ProfileBanner from "./ProfileBanner";

const User = () => {
  const { fetchUser, profile, module } = useContext(ProfileBuilderContext);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <ProfileBanner profile={profile} />
      <Module module={module} />
    </div>
  );
};

export default User;
