const scoreReducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT_SCORE':
            return action.value;
        case 'RESET_SCORE':
            return 0;
        default :
            return state;
    }
}
export default  scoreReducer;