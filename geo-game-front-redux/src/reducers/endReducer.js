const endReducer=(state=false,action)=>{
    switch(action.type){
        case 'END':
            return true;
        case 'START':
            return false;
        default :
            return state;
    }
}
export default  endReducer;