/* Copy right oussema mouhib HICHRI February 2022 */
import React ,{useState}from 'react'
import Header from './Header'
import StationsList from './StationsList'
import Footer from './Footer'
import './index.css'

export default function StationsContainer() {
  const [stationName,setStationName] = useState('namme');

  return (
    <div className='station-container'>
    <Header/>
    <StationsList setStationName={(x)=> setStationName(x)}/>
    <Footer stationName = {stationName}/>
    </div>
  )
}
