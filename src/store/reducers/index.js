import { initialState } from '../../config.js';

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...initialState,
        gameStarted: true,
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
      const { currentPlayer, remainingTime, currentMoveDuration } = state;
      return {
        ...state,
        currentMoveDuration: currentMoveDuration + 1,
        remainingTime: {
          ...remainingTime,
          [currentPlayer]: remainingTime[currentPlayer] - 1
        }
      };

    case "END_GAME":
      return {
        ...state,
        gameStarted: false,
        gameEnded: true
      };

    default:
      return state;
  }
}

export default rootReducer;
