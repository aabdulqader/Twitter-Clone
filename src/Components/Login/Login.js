import React from "react";
import "./Login.css";
import logo from "../../logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../Firebase";
import { useStateValue } from "../../ContextData/StateProvider";
import { actionType } from "../../ContextData/Reducer";
const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img src={logo} alt="" />
      <Button type="submit" onClick={signIn}>
        {" "}
        Login With Google
      </Button>
    </div>
  );
};
export default Login;
