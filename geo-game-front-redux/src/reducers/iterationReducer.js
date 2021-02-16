const iterationReducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT_ITERATION':
            return state+1;
        case 'RESET_ITERATION':
            return 1;
        default :
            return state;
    }
}
export default  iterationReducer;