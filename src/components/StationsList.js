/* Copy right oussema mouhib HICHRI February 2022 */
import React,{useState,useEffect}from 'react'
import StationItem from './StationItem'

export default function StationsList({setStationName}) {
  const [stationList,setStationList] = useState([]);

useEffect(() => {
fetch('http://localhost:3000/stations')
    .then(res => {
     return res.json();
    })
    .then(data =>{
      console.log(data)
      setStationList(data);
    })
},[]);

  return (
    <div className='station-list'>
        {stationList.map((el,i)=> { 
        return <StationItem  
        key={i} 
        item={el} 
        setStationName={(x)=> setStationName(x)}
        />
       } 
     )}
    </div>
  )
}
