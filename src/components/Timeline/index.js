import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    timeline: state.timeline
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
    const { timeline } = this.props;
    const elapsedTime = timeline.reduce((partial, a) => partial + a);
    const moves = timeline.map(move => (
      <Move style={{ width: (move * 100) / elapsedTime + "%" }} />
    ));
    return <Moves>{moves}</Moves>;
  }
}

export default connect(mapStateToProps)(Timeline);
