import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './rootReducer'

const composeEnhancers = composeWithDevTools({
  //Specify here name, actionsBlacklist, actionsCreators and other options
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

export type RootState = ReturnType<typeof store.getState>

export default store
