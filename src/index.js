import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './Font-awesome/css/font-awesome.min.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/rootReducer'
const rootElement = document.getElementById('root')
const store = createStore( rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render((   
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> 
),rootElement)