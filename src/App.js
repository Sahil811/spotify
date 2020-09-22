import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromResponse } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
