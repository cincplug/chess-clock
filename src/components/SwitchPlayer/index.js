import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    buttonText: state.gameStarted ? "Switch player" : "Start game"
  };
};

function SwitchPlayer({ buttonText, dispatch }) {
  return (
    <button onClick={() => dispatch({ type: "START_GAME" })}>
      {buttonText}
    </button>
  );
}

const SwitchPlayerButton = connect(mapStateToProps)(SwitchPlayer);

export default SwitchPlayerButton;
