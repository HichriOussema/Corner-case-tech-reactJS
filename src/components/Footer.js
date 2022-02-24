/* Copy right oussema mouhib HICHRI February 2022 */
import React from 'react'

export default function Footer({stationName}) {
  return (
    <div className='footer'>
      <div className='curently-playing'> <p >CURRENTLY PLAYING</p> </div>
      <div> <p>{stationName}</p> </div>
    </div>
  )
}
