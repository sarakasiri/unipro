import React, { useState } from 'react';

import NeshanMap from 'react-neshan-map-leaflet'

const Location = () => {
    const [latitude, setLatitude] = useState(35.6892)
    const [longitude, setLongitude] = useState(51.3890)
    const [zoom, setZoom] = useState(10)

    return (
        <NeshanMap
            options={{
                key: 'YOUR_API_KEY',
                center: [35.699739, 51.338097],
                zoom: 13
            }}
        />
    );
};

export default Location