import {useState} from'react';
import Body from './components/Body.js';
import Header from './styledElement/Header.js';
import Footer from './styledElement/Footer.js'
import Wrapper from './styledElement/Wrapper.js';



document.body.style = 'background: linear-gradient(antiquewhite,#feb47b,antiquewhite );';
function GeoGameApp() {
  const [isLogged,setIsLogged]=useState(true);
  return (
    <Wrapper>
        <Header>geoGame</Header>
        <Body ></Body>
        <Footer>All rights reserved </Footer>
    </Wrapper>
  );
}

export default GeoGameApp;
