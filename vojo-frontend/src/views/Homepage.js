import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { useHistory } from "react-router-dom";

import { Button } from "@mindlab-vojo/component-library";

function Homepage() {
  const history = useHistory();

  function handleNavigationLogin() {
    history.push("/login");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Button
            id="link-to-login-page"
            name="link-login-page"
            onButtonClick={() => handleNavigationLogin()}
            type="submit"
          >
            Bora pro login
          </Button>
        </div>
      </header>
    </div>
  );
}

export { Homepage };
