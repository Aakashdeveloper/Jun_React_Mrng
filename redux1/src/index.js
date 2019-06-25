import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'react';

const createStoreWithMiddleware =  applyMiddleware()(createStore);

import reducers from './reducer'

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>, document.getElementById('root'));