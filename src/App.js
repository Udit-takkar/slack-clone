import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </AppBody>
      </>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
