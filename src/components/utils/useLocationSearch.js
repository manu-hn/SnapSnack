import React, { useState } from 'react'
import useRestaurants from './useRestaurants'
import axios from 'axios';
import { LAT_LONG_API_KEY, LONG_LAT_API_FIRST } from './EnvVariable';

const useLocationSearch = () => {
    
    const {setLatitude, setLongitude, fetchData}=useRestaurants();

    async function fetchLatAndLong(location) {
     
        const response = await axios.get(LONG_LAT_API_FIRST + location.toLowerCase() + LAT_LONG_API_KEY)
        const { lat, lon } = response?.data[0]
        console.log(lat, lon)
        setLatitude(lat);
        setLongitude(lon)
       fetchData()
       
    }

    return {fetchLatAndLong}
}

export default useLocationSearch