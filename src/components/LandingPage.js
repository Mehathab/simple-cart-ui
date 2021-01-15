import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { SIGNIN_TYPE, SIGNUP_TYPE } from "../utils/loginConstants";
import { PRODUCTS_ROUTE } from "../utils/routingConstants";
import Login from "./Login";

const LandingPage = () => {
  const [loginType, setLoginType] = useState(SIGNIN_TYPE);
  const history = useHistory();
  const onLoginSubmit = () => history.push(PRODUCTS_ROUTE);
  const onLoginTypeSelect = (e) => setLoginType(e.target.value);

  return (
    <section>
      <Login type={loginType} onSubmit={onLoginSubmit}>
        {loginType === SIGNUP_TYPE && (
          <Button
            color='primary'
            value={SIGNIN_TYPE}
            onClick={onLoginTypeSelect}
          >
            Sign In
          </Button>
        )}
        {loginType === SIGNIN_TYPE && (
          <Button
            color='success'
            value={SIGNUP_TYPE}
            onClick={onLoginTypeSelect}
          >
            Sign Up
          </Button>
        )}
      </Login>
    </section>
  );
};

LandingPage.prototype = {
  type: PropTypes.oneOf(["signIn", "signUp"]),
};

export default LandingPage;
