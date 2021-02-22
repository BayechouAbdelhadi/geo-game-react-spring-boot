import  React,{ useEffect,useState }from "react";
import { MapContainer, useMapEvents,TileLayer, Marker, Popup ,Polyline} from 'react-leaflet';
import {useSelector,useDispatch} from 'react-redux';
import {endPart,showMarkers,incrementDifference} from '../actions/actions';
import {haversineDistance}from '../util/drawData.js';

const limeOptions = { color: 'red' }

function Markers(){

    const endOfPart=useSelector(state=>state.endPart);
    const markers=useSelector(state=>state.markers);
    const city=useSelector(state=>state.city);
    const [position1,setPosition1]=useState(null); 
    const [position2,setPosition2]=useState(null);
    const dispatch =useDispatch();
    const map = useMapEvents({
        click(e) {
            if(!endOfPart)
            {
                const cityLatLng=[city.data.lat,city.data.lng];
                setPosition2(cityLatLng);
                setPosition1(e.latlng)
                map.flyTo(cityLatLng,6);
                const end={lat:cityLatLng[0],lng:cityLatLng[1]}
                const start={lat:e.latlng.lat,lng:e.latlng.lng}
                const distance =haversineDistance(start,end);
                dispatch(incrementDifference(distance));
                dispatch(showMarkers());
                dispatch(endPart());
            }
        },
      });
      useEffect(()=>{
          if(!markers)
            map.flyTo([47.0833, 2.4],5);


      },[markers]);
      return markers?position1 === null ? null : (
        <>
        <Marker position={position1}>
          <Popup>Your decision</Popup>
        </Marker>
        <Marker position={position2}>
        <Popup>The Right position</Popup>
        <Polyline positions ={[position1,position2]} pathOptions={limeOptions}></Polyline>
      </Marker>
      </>
      ):null;
}
const Map=()=>{
    
    return(
        <MapContainer center={[47.0833, 2.4]} zoom={5} 
                        scrollWheelZoom={false} 
                        style={{ width: '650px', height: '280px', borderBottom:'2px solid'}}
        > 
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers/>
        </MapContainer>
    );
}
export default Map;