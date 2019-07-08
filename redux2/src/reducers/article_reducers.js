export default function(state={},action){
    switch(action.type){
        case 'GET_LATEST':
            return{...state,latest:action.payload}
        case 'GET_ARTICLES':
            return{...state,articles:action.payload}
        case 'GET_SELECTED_NEWS':
            return{...state,selected:action.payload}
        case 'CLEAR_NEWS':
            return{...state,selected:action.payload}
        default:
            return state
    }
}