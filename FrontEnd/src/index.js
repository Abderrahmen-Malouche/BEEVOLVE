
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './normalize.css';
import './all.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>
 ,
 document.getElementById("root"))