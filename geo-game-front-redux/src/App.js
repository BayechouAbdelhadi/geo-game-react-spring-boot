import React ,{useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types.js";
import { logout } from "./actions/securityActions";
import SecuredRoute from './securityUtils/SecureRoute';
import GeoGameApp from './GeoGameApp';
import SignIn  from './components/SignIn.js';
import SignUp  from './components/SignUp.js';





const  App=()=>{
    useEffect(()=>{
        const jwtToken = localStorage.jwtToken;
        if (jwtToken) {
            setJWTToken(jwtToken);
            const decoded_jwtToken = jwt_decode(jwtToken);
            store.dispatch({
              type: SET_CURRENT_USER,
              payload: decoded_jwtToken
            });
          
            const currentTime = Date.now() / 1000;
            if (decoded_jwtToken.exp < currentTime) {
              store.dispatch(logout());
              window.location.href = "/";
            }
          }
    });
    return (
        <Provider store={store}>
        <Router>
        <div className="App">
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route  path="/register" component={SignUp} />
            <SecuredRoute exact path="/play" component={GeoGameApp} />
        </Switch>

        </div>
        </Router>
      </Provider>
    );
}

export default App;