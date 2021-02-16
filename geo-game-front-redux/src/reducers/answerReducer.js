const initialState={
    name:'',
    difference:'0'
}
const answerReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_ANSWER':
            return action.value;
        default :
            return state;
    }
}
export default  answerReducer;