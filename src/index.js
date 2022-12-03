import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from '@/store';

import 'normalize.css';
import './assets/css/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<h1>loading...</h1>}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
