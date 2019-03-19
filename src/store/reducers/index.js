const msPerMinute = 60 * 1000;
const defaultInitialTime = 15 * msPerMinute;
const initialState = {
  gameStarted: false,
  remainingTime: {
    white: defaultInitialTime,
    black: defaultInitialTime
  },
  currentPlayer: "white",
  currentMoveDuration: 0,
  timeline: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        gameStarted: true
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

    default:
      return state;
  }
}

export default rootReducer;
