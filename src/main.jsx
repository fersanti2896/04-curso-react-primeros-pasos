
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { FirstApp } from './FirstApp';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <FirstApp title={ "Hola, Soy Fernando!" } subTitle={ 1 } />
    </React.StrictMode>,
);