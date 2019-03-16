import React, { Component } from "react";
import Timer from "./components/Timer";
import MainCTA from "./components/MainCTA";
import Timeline from "./components/Timeline";
import styled from "styled-components";
import "./App.css";

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <Layout>
        <Timer />
        <MainCTA />
        <Timeline />
      </Layout>
    );
  }
}

export default App;
