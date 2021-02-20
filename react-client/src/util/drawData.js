
const drawLine=(start,end,google,map)=>{
    const line = new google.maps.Polyline({
        path: [
          new google.maps.LatLng(start.lat,start.lng), 
          new google.maps.LatLng(end.lat,end.lng)
          ],
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
    });
    return line; 
}
const drawMarker=(position,google,map)=>{
    const marker= new google.maps.Marker({
            position: position,//mapsMouseEvent.latLng.toJSON(),
            map:map
        });
    return marker;
}
const haversineDistance=(start, end) =>{
    const R = 3958.8, // Radius of the Earth in miles
        rlat1 = start.lat* (Math.PI/180), // Convert degrees to radians
        rlat2 = end.lat * (Math.PI/180), // Convert degrees to radians
        difflat = rlat2-rlat1, // Radian difference (latitudes)
        difflon = (end.lng-start.lng )* (Math.PI/180),// Radian difference (longitudes)
        d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
        return d*1.60934;
  }
const drawData=(start,end,google,map)=>{
    const markerStart=drawMarker(start,google,map);
    const markerEnd=drawMarker(end,google,map);
    const line =drawLine(start,end,google,map);
    const data={
            distance :haversineDistance(start,end),
            elements : [markerStart,markerEnd,line]
        
        };
        return data;
    }
    
export  const roundNumber=(number)=>{
        return Number(number.toFixed(4));    //pou arrorndir à 4 chiffre 
    }
export default drawData;