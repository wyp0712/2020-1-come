import React, { Component } from 'react'
// 引入样式
import './App.scss'
import Header from './components/Header'
import Todo from './components/Todo'
import store from './store/index'
import { Provider } from 'react-redux'


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Header />
                <Todo />
            </Provider>
        )
    }
}