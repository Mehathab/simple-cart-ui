import React from "react";
import PropTypes from "prop-types";
import classes from "classnames";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import useSimpleInput from "../customHooks/useSimpleInput";
import {
  SIGNIN_TYPE,
  SIGNUP_TYPE,
  loginContent,
} from "../utils/loginConstants";
import localStyles from "./Login.module.scss";

const Login = ({ type = SIGNIN_TYPE, onSubmit, children }) => {
  const { bind: userNameBnd, value: userName } = useSimpleInput();
  const { bind: passwordBnd, value: password } = useSimpleInput();
  const { bind: verifyPasswordBnd, value: verifiedPassword } = useSimpleInput();
  const {
    submitContent,
    usernameContent,
    passwordContent,
    verifyPasswordContent,
  } = loginContent?.[type] || {};
  const isSignUpType = type === SIGNUP_TYPE;
  const isSubmitButtonDisabled = () =>
    isSignUpType
      ? !(userName && password && verifiedPassword)
      : !(userName && password);

  return (
    <section className={localStyles.login}>
      <Form className={localStyles.loginForm}>
        <FormGroup>
          <Label for={usernameContent?.id}>Username</Label>
          <Input {...usernameContent} {...userNameBnd} />
        </FormGroup>
        <FormGroup>
          <Label for={passwordContent?.id}>Password</Label>
          <Input {...passwordContent} {...passwordBnd} />
        </FormGroup>
        {isSignUpType && (
          <FormGroup>
            <Label for={verifyPasswordContent?.id}>Password</Label>
            <Input {...verifyPasswordContent} {...verifyPasswordBnd} />
          </FormGroup>
        )}

        <Button
          color={isSignUpType ? "success" : "primary"}
          disabled={isSubmitButtonDisabled()}
          onClick={onSubmit}
        >
          {submitContent?.text}
        </Button>
      </Form>
      <section className={localStyles.childrenBlock}>
        <Label>Or</Label>
        {children}
      </section>
    </section>
  );
};

Login.prototype = {
  type: PropTypes.oneOf(["signIn", "signUp"]),
};

export default Login;
