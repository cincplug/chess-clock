import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    buttonText: state.gameStarted ? "nije počelo" : "počelo"
  };
};

const handleClick = () => {
  
};

class SwitchPlayer extends Component {
  render() {
    const { buttonText } = this.props;
    return <button onClick={handleClick}>{buttonText}</button>;
  }
}

const SwitchPlayerButton = connect(mapStateToProps)(SwitchPlayer);

export default SwitchPlayerButton;
