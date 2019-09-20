import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import {requestData , Search , changeType} from './reducers';

const rootReducers = combineReducers({requestData, Search, changeType});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

