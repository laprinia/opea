import React, { useEffect } from "react";

import useJWT from "../../hooks/useJWT";
import NavBar from "../molecules/NavBar";

const Dashboard = () => {
  const { username, isAuth } = useJWT();
  useEffect(() => {
    console.log(`Hii ${username}`);
  }, [isAuth]);
  return <NavBar />;
};

export default Dashboard;
