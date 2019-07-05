export default function(state={},action){
    switch(action.type){
        case 'GET_GALLERY':
            return{...state,galleryimg:action.payload}
        default:
            return state
    }
}