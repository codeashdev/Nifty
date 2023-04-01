import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './data/store/store';
import { InputProvider } from './inputContext/inputContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <InputProvider>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </InputProvider>
  </React.StrictMode>,
)
