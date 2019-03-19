import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ElapsedTime from "./ElapsedTime";

const mapStateToProps = state => {
  const { timeline, currentMoveDuration, gameEnded } = state;
  return {
    timeline,
    currentMoveDuration,
    gameEnded
  };
};

const Moves = styled.div`
  display: flex;
  width: 80%;
  background: white;
`;

const Move = styled.div`
  height: 1rem;
  border: 1px solid transparent;
  &:nth-child(odd) {
    background: white;
  }
  &:nth-child(even) {
    background: black;
  }
`;

class Timeline extends PureComponent {
  render() {
    const { timeline, currentMoveDuration, gameEnded } = this.props;
    const elapsedTime =
      timeline.length
        ? timeline.reduce((partial, a) => partial + a) + currentMoveDuration
        : currentMoveDuration;
    const moves = timeline
      .concat(currentMoveDuration)
      .map((move, index) => (
        <Move
          key={"move" + index}
          style={{ width: (move * 100) / elapsedTime + "%" }}
        />
      ));
    return (
      <>
        <Moves>{moves}</Moves>
        {gameEnded && <ElapsedTime counted={elapsedTime} />}
      </>
    );
  }
}

export default connect(mapStateToProps)(Timeline);
