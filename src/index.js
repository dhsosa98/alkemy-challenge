import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
axios.defaults.headers.common.authorization = sessionStorage.getItem('token')

ReactDOM.render(<App />, document.getElementById('app'))