const initialState=true;
const startReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ENABLE_START':
            return true;
        case 'DISABLE_START':
            return false;
        default :
            return state;
    }
}
export default  startReducer;