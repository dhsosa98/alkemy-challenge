import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/tailwind.css'
import {ProvideAuth} from './AuthContext';

ReactDOM.render(
    <ProvideAuth>
         <App />
    </ProvideAuth>, 
    document.getElementById('app')
)