export const SIGNIN_TYPE = "signIn";
export const SIGNUP_TYPE = "signUp";
export const loginContent = {
  [SIGNIN_TYPE]: {
    usernameContent: {
      type: "text",
      name: "username",
      id: "username",
      placeholder: "Please enter username",
    },
    passwordContent: {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Please enter password",
    },
    submitContent: {
      text: "Sign In",
    },
  },
  [SIGNUP_TYPE]: {
    usernameContent: {
      type: "text",
      name: "username",
      id: "username",
      placeholder: "Please enter username",
    },
    passwordContent: {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Please enter password",
    },
    verifyPasswordContent: {
      type: "password",
      name: "verifyPassword",
      id: "verifyPassword",
      placeholder: "Please verify password",
    },
    submitContent: {
      text: "Sign Up",
    },
  },
};
