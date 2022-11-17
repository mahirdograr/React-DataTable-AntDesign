import React, { useContext } from "react";
import { AuthContext } from "../../../store/AuthContext";

const ProfilePage = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <h1>{auth.adminUser?.email}</h1>
    </>
  );
};

export default ProfilePage;
