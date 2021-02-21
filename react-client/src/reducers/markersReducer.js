const markersReducer=(state=false,action)=>{
    switch(action.type){
        case 'SHOW_MARKERS':
            return true;
        case 'HIDE_MARKERS':
            return false;
        default :
            return state;
    }
}
export default  markersReducer;