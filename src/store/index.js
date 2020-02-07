import { createStore, combineReducers, applyMiddleware } from 'redux'
import todo from './reducers/todo'
// 中间件 发起action的时候在控制台打印log
import logger from 'redux-logger'

// 合并reducer
const reducers = combineReducers({
    todo
})

const store = createStore(reducers, applyMiddleware(logger))

export default store