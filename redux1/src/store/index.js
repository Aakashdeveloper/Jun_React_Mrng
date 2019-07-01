import { createStore, applyMiddleware} from 'redux';

import reducers from '../reducer'
let store = createStore(reducers,applyMiddleware())

export default store