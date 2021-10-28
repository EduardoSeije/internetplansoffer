import React from 'react'
import { PrevButton } from './PrevButton';

export const Cards = () => {
  const cardsData = { 
    "userData": 
    { "zipcode": "", 
    "offers": 
    [ { "name": "Oferta 1", "price": 5099, "id": 1, "isSelected": false }, 
    { "name": "Oferta 2", "price": 10099, "id": 2, "isSelected": false }, 
    { "name": "Oferta 3", "price": 15099, "id": 3, "isSelected": false } ] } };
  
  
    return (
    <div className='cardWapper'>
      <div className='internetCards'>
        <h1>Cards</h1>
        {console.log(cardsData.userData.offers)}
      </div>
      <PrevButton />    
    </div>
  )
}
