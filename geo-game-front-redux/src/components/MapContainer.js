import  React,{ useEffect }from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import drawData ,{roundNumber}from '../util/drawData.js';
import {useSelector,useDispatch} from 'react-redux';
import {endPart,getMarkers,incrementDifference} from '../actions/actions';

const MapContainer = () => {

    const endOfPart=useSelector(state=>state.endPart);
    const city=useSelector(state=>state.city);

    const dispatch=useDispatch();
    const { ref, map, google } = useGoogleMaps(
        "AIzaSyD0Sn5XGf6fTVpwKn8zuSZtQHzKV9UHxsQ",
        {
        center:
        {
            lat: 47.0833,
            lng: 2.4
        },
        zoom: 5,
        },
    );
   
    useEffect(()=>{
        if (map)
            var mouseListener=map.addListener('click',(mapsMouseEvent)=>
            {
                if(!endOfPart)
                {   const cityLatLng=
                    {
                        lat:city.data.lat,lng:city.data.lng
                    }
                    const data=drawData(cityLatLng,mapsMouseEvent.latLng.toJSON(),google,map);
                    dispatch(getMarkers(data.elements));
                    dispatch(incrementDifference(data.distance));
                    dispatch(endPart());
                }
                
            });
        return function clinUpListener(){
            if(google)
                google.maps.event.removeListener(mouseListener);
        }
    },);
return (
    <div 
        ref={ref} 
        style=
        {
            { 
                width: '650px',
                height: '280px',
                borderBottom:'2px solid'
            }
        } 
    />
)
};
 
export default MapContainer;