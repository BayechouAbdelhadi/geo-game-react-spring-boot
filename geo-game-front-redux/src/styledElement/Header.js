import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { logout} from "../actions/securityActions";
import {useStore,useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   // background: 'linear-gradient(#B03A2E, #F8C471)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logOutButton:{
    background: 'white',
    borderRadius: 3,
    border: 0,
    color: 'red',
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft:'5px'
  },
  profileButton:{
    background: 'white',
    borderRadius: 3,
    border: 0,
    color: 'blue',
    height: 30,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  header:{
    background: 'black',//'linear-gradient(#B03A2E, #F8C471)',
    color:'white',
    fontFamily:'times-new-roman',
    opacity:'0.75'
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar=()=> {
  const classes = useStyles();
  const store=useStore();
  const user=useSelector(state=>state.security.user);
  const handleLogout=()=> {
    store.dispatch(logout());
    window.location.href = "/";
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.title}>
            GeoGame
          </Typography>
          <Link to="">
            <Button className={classes.profileButton} >{user.fullName}</Button>
          </Link>
          <Link  to="/"  onClick={handleLogout}>
              <Button className={classes.logOutButton}>Logout</Button>
        </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default  ButtonAppBar;
const Header = styled.div`
background: linear-gradient(#B03A2E, #F8C471);
height:40px;
border-bottom:1px solid ;
color:white;
font-weight:bold;
font-size:20;
padding:5px
`;
