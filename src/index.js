import React from 'react'
import {render} from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import App from './App'
import './index.css'

const target = document.querySelector('#root')

render(
        <Provider store={store}>
            <App/>
        </Provider>, target
)
