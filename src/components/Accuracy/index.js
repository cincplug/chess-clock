import React, { PureComponent } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setAccuracy } from "../../store/actions";

const mapStateToProps = state => {
  const { msInterval } = state;
  return {
    msInterval
  };
};

const mapDispatchToProps = {
  setAccuracy
};

const AccuracyWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AccuracyButton = styled.div`
  background: white;
  padding: 0.2rem 0.4rem;
  margin: 0 0.4rem;
  border-radius: 4px;
  text-align: center;
  &.active {
    background: #4ad;
    color: white;
  }
`;

class Accuracy extends PureComponent {
  render() {
    const accuracyOptions = [1, 10, 100, 1000];
    const { msInterval } = this.props;
    return (
      <AccuracyWrap>
        <span>Accuracy (ms): </span>
        {accuracyOptions.map((option, index) => (
          <AccuracyButton
            key={"accuracy" + index}
            onClick={() => this.props.setAccuracy(option)}
            className={ option === msInterval ? 'active' : '' }
          >
            {option}
          </AccuracyButton>
        ))}
      </AccuracyWrap>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accuracy);
