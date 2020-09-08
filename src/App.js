import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
import CookieConsent, { Cookies } from "react-cookie-consent";

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
