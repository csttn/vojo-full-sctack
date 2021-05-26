import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Footer,
  Typography,
  EmailInput,
  PasswordInput,
  Spinner,
  StickyToast,
  themes,
} from "@mindlab-vojo/component-library";

import "../style/Login.sass";

import { api } from "./services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const history = useHistory();

  function handleNavigationAuthorized() {
    history.push("/authorized");
  }

  async function checkIsFieldsValid(username, password) {
    if (username.errorMessage !== "") {
      setUsernameError(username.errorMessage);
      return usernameError;
    }
    if (password.errorMessage !== "") {
      setPasswordError(password.errorMessage);
      return passwordError;
    }

    const dataRequest = {
      username: username.maskedValue,
      password: password.maskedValue,
    };

    return dataRequest;
  }

  async function handleLoginClick() {
    setIsLoading(true);
    //check fields
    const dataRequest = await checkIsFieldsValid(username, password);

    //enviar requisição ao backend
    if (username.errorMessage === "" && password.errorMessage === "") {
      await loginSet(dataRequest);
    }
    setIsLoading(false);
  }

  async function loginSet(data) {
    try {
      const response = await api.post("/v3/auth/login", data);

      setError(false);
      setIsLoading(false);
      setSuccess(true);

      const { headers } = response;
      console.log(headers, "TOKEN");

      handleNavigationAuthorized();
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
      setSuccess(false);
    }
  }

  return (
    <Container maxWidth="full">
      <Container maxWidth="full">
        <Header />
        {error && (
          <div
            style={{
              display: "block",
              width: "100%",
              zIndex: "100",
            }}
          >
            <StickyToast show>
              <Typography
                color={themes.vojo.colors.redColor}
                tag="span"
                type="default"
              >
                {error.message}
              </Typography>
            </StickyToast>
          </div>
        )}
      </Container>
      <Container maxWidth="mobile">
        <div className="Login__Container">
          <div className="Login__Text__Title">
            <Typography
              tag="h1"
              type="title"
              color={themes.vojo.colors.primaryColor}
            >
              <strong>Entre no VOJO</strong>
            </Typography>
          </div>
          <div className="Login__Forms">
            <div className="Login__Forms__Input">
              <EmailInput
                errorMessage={usernameError}
                id="username"
                isRequired
                label="E-mail"
                name="username"
                onInputChange={(state) => setUsername(state)}
                placeholder="E-mail"
                showError={!!usernameError}
                type="text"
              />
            </div>
            <div className="Login__Forms__Input">
              <PasswordInput
                errorMessage={passwordError}
                id="password"
                isRequired
                label="Senha"
                name="password"
                onInputChange={(state) => setPassword(state)}
                placeholder="Senha"
                showError={!!passwordError}
                type="text"
                isPassword
              />
            </div>
            <div className="Login__Text__ForgotPassword">
              <Link to="/">
                <Typography
                  isUnderlined
                  tag="h1"
                  type="default"
                  color={themes.vojo.colors.primaryColor}
                >
                  <strong>Esqueceu sua senha?</strong>
                </Typography>
              </Link>
            </div>
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="Login__Forms__Button">
                <div className="Login__Forms__Button__Wrapper">
                  <Button
                    id="submit-login"
                    name="submit-login"
                    onButtonClick={() => handleLoginClick()}
                    type="submit"
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      <Container maxWidth="full">
        <Footer />
      </Container>
    </Container>
  );
}

export { Login };
