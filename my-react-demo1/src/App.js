import React from 'react';

import RouterView from './router/index'
import config from './router/config'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouterView routes={config}/>
      </div>
    </BrowserRouter>

  );
}

export default App;
