/* Copy right oussema mouhib HICHRI February 2022 */
import React,{useState} from 'react'
import minusButton from '../icons/minus.png'
import plusButton from '../icons/plus.png'

export default function StationItem({item,setStationName}) {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
    setStationName(item.name)
  };
  const UpperComponent = () => (
     <div id="results" className='station-item2' >
      <img className='interface_plus_add' src={minusButton}/>
      <img className='middleButtonImage' src={item.imagelink}/>
      <img className='interface_plus_add' src={plusButton}/>
      </div>
  ) 
  return (
    <div onClick={toggleClass} className= 'container-station-items'>
      { !isActive ? <UpperComponent /> : null }
      <div className='station-item' >
      <p className='station-name-params'>{item.name}</p>
      <p className='station-freqeunce-params'>{item.frequence}</p>
      </div>
    </div>
  )
}
