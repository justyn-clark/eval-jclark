import { combineReducers } from 'redux'
import appReducer from './reducer'

export default function createReducer() {
  const rootReducer = combineReducers({
    app: appReducer,
  })

  return rootReducer
}
