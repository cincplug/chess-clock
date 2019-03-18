import React from "react";
import styled from "styled-components";
import Clock from "./Clock";

const ClockBox = styled.div`
  display: flex;
  width: 14rem;
`;

function Timer() {
  return (
    <ClockBox>
      <Clock player="white"/>
      <Clock player="black"/>
    </ClockBox>
  );
}

export default Timer;
