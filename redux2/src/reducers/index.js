import { combineReducers } from 'redux';
import news from './article_reducers';
import gallery from './gallery_reducers';

const rootReducer = combineReducers({
    news,
    gallery
})

export default rootReducer;