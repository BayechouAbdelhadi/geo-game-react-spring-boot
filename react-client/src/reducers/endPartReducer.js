const endPartReducer=(state=true,action)=>{
    switch(action.type){
        case 'END_PART':
            return true;
        case 'START_PART':
            return false;
        default :
            return state;
    }
}
export default  endPartReducer;