import { ProfileBuilderContext } from "@/app/Context/ContextProvider";
import React, { useContext, useEffect } from "react";

const User = () => {
  const { fetchUser } = useContext(ProfileBuilderContext);

  useEffect(() => {
    fetchUser();
  }, []);

  return <div>User</div>;
};

export default User;
