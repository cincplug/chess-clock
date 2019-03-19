import { initialState } from "../initialState.js";

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...initialState,
        gameStarted: true,
        startTime: Date.now(),
        currentPlayer: "white"
      };

    case "SWITCH_PLAYER":
      const nextPlayer = state.currentPlayer === "white" ? "black" : "white";
      const appendDuration = state.currentMoveDuration;
      return {
        ...state,
        currentPlayer: nextPlayer,
        currentMoveDuration: 0,
        timeline: state.timeline.concat(appendDuration)
      };

    case "PROCESS_TIME":
      const {
        currentPlayer,
        remainingTime,
        currentMoveDuration,
        msInterval
      } = state;
      return {
        ...state,
        currentMoveDuration: currentMoveDuration + msInterval,
        remainingTime: {
          ...remainingTime,
          [currentPlayer]: remainingTime[currentPlayer] - msInterval
        }
      };

    case "END_GAME":
      return {
        ...state,
        gameStarted: false,
        gameEnded: true,
        endTime: Date.now()
      };

    case "SET_ACCURACY":
      return {
        ...state,
        msInterval: action.accuracy
      };

    default:
      return state;
  }
}

export default rootReducer;
