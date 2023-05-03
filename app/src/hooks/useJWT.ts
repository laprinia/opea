import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import UserDataService from "../service/UserDataService";

export default function useJWT() {
  const [cookies, setCookies, removeCookie] = useCookies();
  const [username, setUsername] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const verifyUser = async () => {
    if (!cookies.jwt) {
      setIsAuth(false);
      setUsername("");
      navigate("/login");
    } else {
      UserDataService.checkUser()
        .then((response) => {
          const { data } = response;
          if (!data.status) {
            removeCookie("jwt");
            navigate("/login");
            setIsAuth(false);
            setUsername("");
          } else {
            setIsAuth(true);
            setUsername(data.user);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);

  return { username, isAuth };
}
