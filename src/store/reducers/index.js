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
  timeline: [2000, 4000, 1500, 7000, 8000, 2400, 1432, 2000]
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
      return {
        ...state,
        currentPlayer: nextPlayer,
        currentMoveDuration: 0,
        timeline: state.timeline.concat([state.currentMoveDuration])
      };

    case "PROCESS_TIME":
      const { currentPlayer, remainingTime } = state;
      return {
        ...state,
        currentMoveDuration: state.currentMoveDuration + 1,
        remainingTime: {
          [currentPlayer]: remainingTime[currentPlayer] - 1
        }
      };

    default:
      return state;
  }
}

export default rootReducer;
