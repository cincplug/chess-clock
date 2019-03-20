import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { startTime, endTime } = state;
  const { counted } = ownProps;
  return {
    startTime,
    endTime,
    counted
  };
};

const Time = styled.div`
  text-align: center;
  border: 1px solid transparent;
  font-size: 0.8rem;
`;

class ElapsedTime extends PureComponent {
  render() {
    const { startTime, endTime, counted } = this.props;
    return (
      <div>
        <Time>Difference by Date.now(): <strong>{endTime - startTime}</strong> <span>ms</span></Time>
        <Time>Elapsed time by clock: <strong>{counted}</strong> <span>ms</span></Time>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ElapsedTime);
