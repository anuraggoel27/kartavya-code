import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Fab from "@material-ui/core/Fab";
import { FormLabel } from "@material-ui/core";
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
        <div className="admin-button">
      <Fab
        className="query-button"
        variant="extended"
        color="inherit"
        onClick={() => loginWithRedirect()}
      >
      <img src="/images/login.png" className="button-icon"></img>
        Login
      </Fab>
      </div>
    )
  );
};

export default LoginButton;
