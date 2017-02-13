import { combineReducers } from 'redux'
import { TYPES } from './actions'
import { resetTimer } from './actions'

console.log(TYPES, resetTimer)

const initialState = {
  value: 0,
  isRunning: false,
  pid: null
}

const timer = (state = initialState, action) => {
  switch (action.type) {

    case TYPES.RESET_TIMER:
      return Object.assign({}, state, { value: 0, isRunning: false })

    case TYPES.SET_TIMER:
      return Object.assign({}, state, { value: action.int })

    case TYPES.START_TIMER:
      return Object.assign({}, state, { isRunning: true })

    case TYPES.STOP_TIMER:
      return Object.assign({}, state, { isRunning: false })

    case TYPES.SET_TIMER_PID:
      return Object.assign({}, state, { pid: action.value })

    default:
      return state
  }
}

export default combineReducers({
  timer
})
