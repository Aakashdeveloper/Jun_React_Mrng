import { combineReducers } from 'redux';
import news from './article_reducers'

const rootReducer = combineReducers({
    news
})

export default rootReducer;