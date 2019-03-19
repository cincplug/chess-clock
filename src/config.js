const msPerMinute = 60 * 1000;
const defaultInitialTime = 15 * msPerMinute;
const initialState = {
  gameStarted: false,
  gameEnded: false,
  remainingTime: {
    white: defaultInitialTime,
    black: defaultInitialTime
  },
  currentPlayer: "",
  currentMoveDuration: 0,
  timeline: []
};

export { initialState };