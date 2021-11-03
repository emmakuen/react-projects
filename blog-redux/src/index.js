import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'


const AppWrapper = ({ children }) => {
    const store = createStore(reducers, applyMiddleware(thunk));
    return (<Provider store={store}>{children}</Provider>)
}

ReactDOM.render(
    (<AppWrapper>
        <App />
    </AppWrapper>),
    document.getElementById('root')
);