import React from 'react'
import { PrevButton } from './PrevButton';

export const Cards = () => {
  const cardsData = { 
    "userData": 
    { "zipcode": "", 
    "offers": 
    [ { "name": "Oferta 1", "price": 50.99, "id": 1, "isSelected": false }, 
    { "name": "Oferta 2", "price": 100.99, "id": 2, "isSelected": false }, 
    { "name": "Oferta 3", "price": 150.99, "id": 3, "isSelected": false } ] } };
    
    const { offers } = cardsData.userData;
    
    return (
    <div className='cardWapper'>
      <div className='internetCards'>
        {offers.map((offer) => {
         return (
          <div key={offer.name}>
            <h3>{offer.name}</h3>
            <h3>{offer.price.toLocaleString('pt-BR',{
              style: 'currency',
              currency: 'BLR'
            })}</h3>
            <h3>{offer.isSelected ? <p>Selecionado</p> : <p>Não Selecionado</p>}</h3>
          </div>   
         );
        })}
      </div>
      <PrevButton />    
    </div>
  )
}
