
const msPerMinute = 60 * 1000;
const defaultInitialTime = 15 * msPerMinute;

const initialState = {
  gameStarted: false,
  remainingTime: {
    white: defaultInitialTime,
    black: defaultInitialTime
  },
  currentPlayer: "white",
  moves: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        gameStarted: true
      };

    default:
      return state;
  }
}

export default rootReducer;
