const markersReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_MARKERS':
            return action.value;
        default :
            return state;
    }
}
export default  markersReducer;