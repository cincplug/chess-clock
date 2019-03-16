import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    buttonAction: state.gameStarted ? "SWITCH_PLAYER" : "START_GAME",
    buttonText: state.gameStarted ? "Next move" : "Start",
    buttonBg: state.currentPlayer
  };
};

const Button = styled.div`
  color: grey;
  background: ${props => props.buttonBg};
  padding: 1rem 2rem;
  -webkit-appearance: none;
  border-radius: 4px;
  font-size: 18px;
  outline: none;
`;

function MainCTA({ buttonAction, buttonText, buttonBg, dispatch }) {
  return (
    <Button
      onClick={() => dispatch({ type: buttonAction })}
      buttonBg={buttonBg}
    >
      {buttonText}
    </Button>
  );
}

export default connect(mapStateToProps)(MainCTA);
