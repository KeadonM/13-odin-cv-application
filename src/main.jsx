import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App.jsx';

import './css/utils/_reset.css';
import './css/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
