export const TYPES = {
  RESET_TIMER: 'RESET_TIMER',
  SET_TIMER: 'SET_TIMER',
  START_TIMER: 'START_TIMER',
  STOP_TIMER: 'STOP_TIMER',
  SET_TIMER_PID: 'SET_TIMER_PID'
}

export const resetTimer = () => ({ type: TYPES.RESET_TIMER })
export const setTimer = (int) => ({ type: TYPES.SET_TIMER, int })
export const setTimerPid = (value) => ({ type: TYPES.SET_TIMER_PID, value })
export const startTimer = () => ({ type: TYPES.START_TIMER })
export const stopTimer = () => ({ type: TYPES.STOP_TIMER })
