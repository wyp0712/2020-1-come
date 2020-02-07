import React from 'react' // react 核心逻辑
import ReactDOM from 'react-dom' // 关于dom的操作
import App from './App'

// ReactDOM.render(渲染的虚拟dom, 页面中渲染的位置, 渲染成功回调函数)
ReactDOM.render(<App />, document.getElementById('root'), () => {
    console.log('渲染成功')
})