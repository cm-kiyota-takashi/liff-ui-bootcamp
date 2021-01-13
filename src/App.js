import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

const { liff } = window;

function App() {
  const [signInFinished, setSignInFinished] = useState(false);
  const [signInFailed, setSignInFailed] = useState(false);

  useEffect(() => {
    liff
      .init({
        liffId: "1655574570-7ZX6eA5P",
      })
      .then(async () => {
        // ログインしてるかチェック
        if (!liff.isLoggedIn()) {
          liff.login();
        }
        setSignInFinished(true);
      })
      .catch((error) => {
        setSignInFailed(true);
        setSignInFinished(true);
      });
  }, []);

  if (!signInFinished) {
    return <div>Loading</div>;
  } else if (signInFailed) {
    return <div>ログイン失敗</div>;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
