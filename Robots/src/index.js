import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

//applyMiddleware
// { createLogger }
// ReduxThunk

import { Provider } from 'react-redux';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { searchRobots } from './redux/reducers';
// requestRobots

import 'tachyons';

// logger

const rootReducers = combineReducers({searchRobots})
//requestRobots
const store = createStore(rootReducers);
//applyMiddleware

// ReactDOM.render(<App store={store}/>, document.getElementById('root'));

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,document.getElementById('root'));


registerServiceWorker();
