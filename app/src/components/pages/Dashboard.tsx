import React, { useEffect } from "react";

import useJWT from "../../hooks/useJWT";

const Dashboard = () => {
  const { username, isAuth } = useJWT();
  useEffect(() => {
    console.log(`Hii ${username}`);
  }, [isAuth]);
  return <p>hi dashboard</p>;
};

export default Dashboard;
