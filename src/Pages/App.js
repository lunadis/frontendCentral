import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

html, body{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

body{
  background: rgb(255,168,45);     
  background: radial-gradient(circle, rgba(255,168,45,1) 0%, rgba(255,115,0,1) 100%);
  margin: 0;
  font-family: Nunito Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  user-select: none;
  transition: 0.5s;
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
