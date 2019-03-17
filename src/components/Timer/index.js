import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    remainingTime: state.remainingTime
  };
};

const ClockBox = styled.div`
  display: flex;
  width: 14rem;
`;

const Clock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 50%;
  background: ${props => props.bg};
  color: gray;
`;

function Timer({ remainingTime }) {
  return (
    <ClockBox>
      <Clock bg="white">
        <div>White</div>
        <div>{remainingTime.white}</div>
      </Clock>
      <Clock bg="black">
        <div>Black</div>
        <div>{remainingTime.black}</div>
      </Clock>
    </ClockBox>
  );
}

export default connect(mapStateToProps)(Timer);
