import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const { timeline, currentMoveDuration } = state;
  return {
    timeline,
    currentMoveDuration
  };
};

const Moves = styled.div`
  display: flex;
  width: 80%;
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
    const { timeline, currentMoveDuration } = this.props;
    let elapsedTime = timeline.length
      ? timeline.reduce((partial, a) => partial + a) + currentMoveDuration
      : 1;
    const moves = timeline
      .concat(currentMoveDuration)
      .map((move, index) => (
        <Move
          key={"move" + index}
          style={{ width: (move * 100) / elapsedTime + "%" }}
        />
      ));
    return <Moves>{moves}</Moves>;
  }
}

export default connect(mapStateToProps)(Timeline);
