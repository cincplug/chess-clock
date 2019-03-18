import React, { PureComponent } from "react";
import styled from "styled-components";
import moment from "moment";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const { player } = ownProps;
  return {
    remainingTime: state.remainingTime[player]
  };
};

const Dial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 50%;
  background: ${props => props.bg};
  color: gray;
  text-transform: capitalize;
`;

class Clock extends PureComponent {
  render() {
    const { player, remainingTime } = this.props;
    const displayTime = moment(remainingTime).format("mm:ss.SSS");
    return (
      <Dial bg={player}>
        <div>{player}</div>
        <div>{displayTime}</div>
      </Dial>
    );
  }
}

export default connect(mapStateToProps)(Clock);
