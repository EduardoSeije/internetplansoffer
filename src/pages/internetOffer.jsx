import React, { useContext } from 'react'
import { Cards } from '../components/Cards'
import { AddressContext } from '../context/AddressProvider'

export const InternetOffer = () => {
  const { address } = useContext(AddressContext);
  return (
    <div>
      <div className='userAddress'>
        <p>{`Logradouro: ${address.logradouro}`}</p>
        <p>{`CEP: ${address.cep}`}</p>
        <p>{`Bairro: ${address.bairro}`}</p>
        <p>{`Cidade: ${address.localidade}`}</p>
        <p>{`Estado: ${address.uf}`}</p>
        <p>{`Código: ${address.ddd}`}</p>
      </div>
      
      <Cards />
    </div>
  );
};
