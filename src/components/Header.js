/* Copy right oussema mouhib HICHRI February 2022 */
import React from 'react'
import leftButton from '../icons/back-arrow.png'
import startButton from '../icons/switch.png'

export default function Header() {
  return (
    <div className='header'>
        <img className='left-button-params' src={leftButton}/>
        <p className='the-word-station'>STATIONS</p>
        <img className='switch-button-params' src={startButton}/>
    </div>
  )
}
