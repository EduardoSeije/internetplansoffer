import React from 'react'
import styled from 'styled-components';

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
    <ContainerCards>
      <div className='internetCards'>
        {offers.map((offer) => {
         return (
          <SubContainer className='offers' key={offer.name}>
            <div>
              <h3>{offer.name}</h3>
              <h3>{offer.price.toLocaleString('pt-BR',{
                style: 'currency',
                currency: 'BLR'
              })}</h3>
              <h3>{offer.isSelected ? <p>Selecionado</p> : <p>Não Selecionado</p>}</h3>
            </div>
          </SubContainer>   
         );
        })}
      </div> 
    </ContainerCards>
  )
}

const ContainerCards = styled.div`
  color: whitesmoke;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: smaller;
  
`;

const SubContainer = styled.div`
  border: 1px solid whitesmoke;
  border-radius: 40px;
  width: 200px;
  height: 110px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  background-color: #020229;
  margin-bottom: 20px;

  div:hover {
    border: 4px solid #11ffff;
    color: #11ffff;
    box-shadow: 0px 0px 35px #11ffff, 0px 0px 15px #11ffffc0 inset;
    box-shadow: 0px 0px 10px #11ffffcc, 0px 0px 3px #11ffff;
  }
`;