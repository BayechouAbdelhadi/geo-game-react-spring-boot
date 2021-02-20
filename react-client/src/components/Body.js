import React from 'react';
import BodyWrapper from '../styledElement/BodyWrapper.js';
import Map from './MapContainer.js';
import Direction from './Direction.js';
import {useSelector} from 'react-redux';

function Body() {
    const city =useSelector(state=>state.city);
    return (
        city?
        <BodyWrapper>
            <Map 
            />
            <Direction 
            />
        </BodyWrapper>:<></>
    );
}

export default Body;