import React from 'react';
// 路由引入
import RouterView from './router/index'
import config from './router/config'
import { BrowserRouter } from 'react-router-dom'
// store沟通数据
import { Provider } from 'react-redux'
import store from './store/index'
// 引入全局样式
import { GlobalStyle } from './style'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle></GlobalStyle>
      <BrowserRouter>
        <div className="App">
          <RouterView routes={config}/>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
