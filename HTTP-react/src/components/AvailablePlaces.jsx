import Places from './Places.jsx';
import { useState,useEffect } from 'react';
import Error from '../Error.jsx';
import {sortPlacesByDistance} from '../loc.js'
import { fetchplaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [places,setplaces]=useState([]);
  const [fetching,setFetching]=useState(false);
  const [error,seterror]=useState();
  useEffect(()=>{
    async function fetchPlaces(){
      setFetching(true);
      try{
        const places=await fetchplaces();
        console.log(places);
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortplaces=sortPlacesByDistance(places,position.coords.latitude,position.coords.longitude);
          setplaces(sortplaces);
          setFetching(false);
  
        })
      } catch(error){
        seterror({message:error.message||'Sorry i amm helpless'});
        setFetching(false);

      }
      
    }
    fetchPlaces();
  },[]);
  if(error){
    return(
      <Error title="Error occured omg" message={error.message}></Error>
    )
  }
  
  return (
    <Places
      title="Available Places"
      places={places}
      loadingText="Fetching places..."
      isLoading={fetching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
