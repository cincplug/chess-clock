import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startGame, switchPlayer, processTime } from "../../store/actions";

const mapStateToProps = state => {
  return {
    gameStarted: state.gameStarted,
    gameEnded: state.gameEnded,
    remainingTime: state.remainingTime,
    buttonText: state.gameStarted ? "Next move" : "Start",
    buttonBg: state.currentPlayer || "white"
  };
};

const mapDispatchToProps = {
  startGame,
  switchPlayer,
  processTime
};

const Button = styled.div`
  color: grey;
  background: ${props => props.buttonBg};
  padding: 1rem 2rem;
  -webkit-appearance: none;
  border-radius: 4px;
  font-size: 18px;
  outline: none;
  transition: all 0.1s ease-in;
  &:hover {
    background: #4ad;
    color: white;
    cursor: pointer;
  }
`;

class MainCTA extends PureComponent {
  timer() {
    let gameInterval = setInterval(() => {
      this.props.processTime();
      if (this.props.gameEnded) {
        clearInterval(gameInterval);
      }
    }, 1);
  }

  handleClick() {
    if (this.props.gameStarted) {
      this.props.switchPlayer();
    } else {
      this.props.startGame();
      this.timer();
    }
  }

  render() {
    const { buttonText, buttonBg } = this.props;
    return (
      <Button onClick={() => this.handleClick()} buttonBg={buttonBg}>
        {buttonText}
      </Button>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCTA);
