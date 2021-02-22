const differenceReducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT_DIFFERENCE':
            return action.value;
        case 'RESET_DIFFERENCE':
            return 0;
        default :
            return state;
    }
}
export default  differenceReducer;