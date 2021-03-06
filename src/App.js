import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLIST",
        playlists: playlists,
      });
    });

    spotify.getPlaylist("0eR9ZXgYcpWrp92pcHtIWH").then((response) => {
      dispatch({
        type: "SET_DESCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
