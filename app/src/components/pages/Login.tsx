import React from "react";

import LoginCard from "../organisms/login/LoginCard";
import UserForm from "../organisms/login/UserForm";

const Login = () => {
  return (
    <UserForm>
      <LoginCard />
    </UserForm>
  );
};

export default Login;
