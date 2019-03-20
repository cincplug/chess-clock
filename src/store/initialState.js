const msPerMinute = 60 * 1000;
const defaultInitialTime = 15 * msPerMinute;

const initialState = {
  msInterval: 100,
  gameStarted: false,
  gameEnded: false,
  startTime: 0,
  endTime: 0,
  remainingTime: {
    white: defaultInitialTime,
    black: defaultInitialTime
  },
  currentPlayer: "",
  currentMoveDuration: 0,
  timeline: []
};

export { initialState };