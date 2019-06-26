import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import reducers from './reducer'
const createStoreWithMiddleware =  applyMiddleware()(createStore);



ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>, document.getElementById('root'));