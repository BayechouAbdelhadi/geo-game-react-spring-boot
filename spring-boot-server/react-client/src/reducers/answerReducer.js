const initialState={
    name:'',
    difference:'0'
}
const answerReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_ANSWER':
            return action.value;
        case 'RESET_ANSWER':
            return initialState;
        default :
            return state;
    }
}
export default  answerReducer;