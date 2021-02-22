const answersReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_ANSWERS':
            return [...state,action.value];
        case 'CLEAR_ANSWERS':
            return [];
        default :
            return state;
    }
}
export default  answersReducer;