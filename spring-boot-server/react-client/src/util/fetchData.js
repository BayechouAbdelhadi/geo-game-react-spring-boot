import axios from 'axios';
import authHeader from "../securityUtils/authorisationHeader"
import {failed,loading,received} from '../actions/actions';

const fetchData= (id ) =>async(dispatch,getState)=> {
      
      const path='/api/cities/'+id;
      await axios.get(path,{'Authorisation':authHeader()}).then(response=>{
        dispatch(received(response.data));
      }).catch((error)=>{dispatch(failed());console.log(error)}); 
      
      return function(dispatch) {
        dispatch(loading());
      }
}
export default fetchData;