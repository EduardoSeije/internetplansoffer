import React from 'react'
import { CepInput } from '../components/CepInput'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Container>
      <h1>Seja Bem vindo(a) à nossa página de promoções</h1>
      <CepInput />
    </Container>
  )
}

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  color: whitesmoke;
  margin-top: 100px;
  margin-left: 80px;
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
`;