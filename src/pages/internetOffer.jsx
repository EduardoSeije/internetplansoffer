import React, { useContext } from 'react'
import { Cards } from '../components/Cards'
import { PrevButton } from '../components/PrevButton';
import { AddressContext } from '../context/AddressProvider'
import styled from 'styled-components';

export const InternetOffer = () => {
  const { address } = useContext(AddressContext);
  return (
    <div>
      <ContainerUser className='userAddress'>
        <p>{`Logradouro: ${address.logradouro}`}</p>
        <p>{`CEP: ${address.cep}`}</p>
        <p>{`Bairro: ${address.bairro}`}</p>
        <p>{`Cidade: ${address.localidade}`}</p>
        <p>{`Estado: ${address.uf}`}</p>
        <p>{`Código: ${address.ddd}`}</p>
        <PrevButton />
      </ContainerUser>
      <Cards />
    </div>
  );
};

const ContainerUser = styled.div`
  color: whitesmoke;
  margin-left: 20px;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: smaller;
  font-weight: bolder;
`;
