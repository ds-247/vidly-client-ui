import React, { useState } from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import Joi from "joi-browser";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Input from "./Input";
import auth from "../services/authService";
import "../componentStyle/form.css";
import SmoothScrollingToTop from "./moviesTableUtil/SmoothScrollingToTop";

function Login() {
  const history = useHistory();

  const [account, setAccount] = useState({ username: "", password: "" });
  const [error, setError] = useState({
    usernameError: false,
    passwordError: false,
    usernameErrorMessage: "",
    passwordErrorMessage: "",
  });

  SmoothScrollingToTop();

  const schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(8).required().label("Password"),
  };

  const validate = () => {
    const { error } = Joi.validate(account, schema, { abortEarly: false });
    if (!error) return null;

    let anyError = {};

    for (const item of error.details) {
      anyError[`${item.path[0]}Error`] = true;
      anyError[`${item.path[0]}ErrorMessage`] = item.message;
    }

    return anyError;
  };

  const validateField = (name, value) => {
    const field = { [name]: value };
    const fieldSchema = { [name]: schema[name] };

    const { error } = Joi.validate(field, fieldSchema);
    return error ? error.details[0].message : null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const $error = { ...error };
    const errorMessage = validateField(name, value);

    if (errorMessage) {
      $error[`${name}Error`] = true;
      $error[`${name}ErrorMessage`] = errorMessage;
    } else if ($error.hasOwnProperty(`${name}Error`)) {
      $error[`${name}Error`] = false;
      $error[`${name}ErrorMessage`] = "";
    }

    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
    setError($error);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const anyError = validate();
    setError(anyError || {});

    if (anyError) return;

    try {
      await auth.login(account.username, account.password);
      const { state } = history.location;
      const redirectingUrl = state ? `${state.from.pathname}` : "/";
      window.location = redirectingUrl;
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const err = { ...error };
        err.usernameError = true;
        err.usernameErrorMessage = ex.response.data;
        setError(err);
      }
    }
  };

  return (
    <>
      {auth.getCurrentUser() ? (
        <Redirect to="/" />
      ) : (
        <div className="form-background-image">
          <div className="form-container">
            <form
              className="form-content"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <h1>Login Form</h1>
              <Box>
                <Input
                  autofocus={true}
                  name="username"
                  label="UserName"
                  onChange={handleInputChange}
                  value={account.username}
                  error={error.usernameError}
                  errorMessage={error.usernameErrorMessage}
                />
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  onChange={handleInputChange}
                  value={account.password}
                  error={error.passwordError}
                  errorMessage={error.passwordErrorMessage}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                disabled={validate() !== null}
              >
                LogIn
              </Button>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                sx={{ marginLeft: "10px" }}
              >
                register
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
