const msPerMinute = 60 * 1000;
const defaultInitialTime = 15 * msPerMinute;

const initialState = {
  remainingTime: {
    white: defaultInitialTime,
    black: defaultInitialTime
  },
  currentPlayer: "white",
  moves: []
};

function rootReducer(state = initialState, action) {
  return state;
}

export default rootReducer;
