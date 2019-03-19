import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  startGame,
  switchPlayer,
  processTime,
  endGame
} from "../../store/actions";
import accurateInterval from "accurate-interval";

const mapStateToProps = state => {
  const {
    gameStarted,
    gameEnded,
    remainingTime,
    currentPlayer,
    msInterval
  } = state;
  return {
    gameStarted,
    gameEnded,
    remainingTime,
    currentPlayer,
    msInterval,
    buttonText: state.gameStarted ? "Next move" : "Start game",
    buttonBg: state.currentPlayer || "white"
  };
};

const mapDispatchToProps = {
  startGame,
  switchPlayer,
  processTime,
  endGame
};

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
`;

const Button = styled.div`
  color: grey;
  background: ${props => props.buttonBg};
  padding: 1rem 2rem;
  -webkit-appearance: none;
  border-radius: 4px;
  font-size: 18px;
  outline: none;
  transition: all 0.1s ease-in;
  text-align: center;
  &:hover {
    background: #4ad;
    color: white;
    cursor: pointer;
  }
`;

const SmallButton = styled(Button)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: white;
  font-size: 16px;
`;

class Main extends PureComponent {
  timer() {
    this.gameInterval = accurateInterval(
      () => {
        this.props.processTime();
        if (this.props.remainingTime[this.props.currentPlayer] === 0) {
          this.gameInterval.clear();
          this.props.endGame();
        }
      },
      this.props.msInterval,
      { aligned: true, immediate: true }
    );
  }

  startButtonClick() {
    if (this.props.gameStarted) {
      this.props.switchPlayer();
    } else {
      this.props.startGame();
      this.timer();
    }
  }

  stopButtonClick() {
    this.props.endGame();
    this.gameInterval.clear();
  }

  render() {
    const { buttonText, buttonBg, gameStarted } = this.props;
    return (
      <MainWrap>
        <Button onClick={() => this.startButtonClick()} buttonBg={buttonBg}>
          {buttonText}
        </Button>
        {gameStarted && (
          <SmallButton onClick={() => this.stopButtonClick()}>
            Stop game
          </SmallButton>
        )}
      </MainWrap>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
