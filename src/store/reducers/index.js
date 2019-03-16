const msPerMinute = 60 * 1000;
const defaultInitialTime = 15 * msPerMinute;

const initialState = {
  gameStarted: false,
  remainingTime: {
    white: defaultInitialTime,
    black: defaultInitialTime
  },
  currentPlayer: "white",
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
      return {
        ...state,
        currentPlayer: nextPlayer
      };

    default:
      return state;
  }
}

export default rootReducer;
