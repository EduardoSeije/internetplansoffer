import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PrevButton = () => {
  return (
    <ContainerButton className='prevButton'>
        <Link className='link' to='/'> 
          <button type="button">Ops, errei meu cep!</button>
        </Link>
    </ContainerButton>    
  );
};

const ContainerButton = styled.button`
  margin-bottom: 30px;
  height: 40px;
  border-radius: 20px;
  background-color: #01094e;
  color: whitesmoke;
  transition: box-shadow 0.5s;

  button:hover {
    border: 4px solid #11ffff;
    color: #11ffff;
    box-shadow: 0px 0px 35px #11ffff, 0px 0px 15px #11ffffc0 inset;
    box-shadow: 0px 0px 10px #11ffffcc, 0px 0px 3px #11ffff;
  }

  .link {
    background-color: #01094e;
  }

`;
