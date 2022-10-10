import React, { useState } from 'react';

import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Location = () => {
    const [latitude, setLatitude] = useState(35.6892)
    const [longitude, setLongitude] = useState(51.3890)
    const [zoom, setZoom] = useState(10)

    return (
        <ReactMapGL width="100%" height={400} latitude={latitude} longitude={longitude} zoom={zoom} mapStyle='mapbox://styles/mapbox/streets-v11'
            mapboxApiAccessToken="YourToken"
            onViewportChange={(viewState) => {
                setLatitude(viewState.latitude);
                setLongitude(viewState.longitude);
                setZoom(viewState.zoom)
            }}>
        </ReactMapGL>
    );
};

export default Location