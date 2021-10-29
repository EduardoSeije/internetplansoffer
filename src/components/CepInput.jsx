import React, { useContext } from 'react'
import { useForm } from 'react-hooks-helper';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AddressContext } from '../context/AddressProvider';
import styled from 'styled-components';

const defaultCep = {
  CEP: '',
}

export const CepInput = () => {
  const [formData, setForm] = useForm(defaultCep);
  const { CEP } = formData; 
  const { setAddress } = useContext(AddressContext);

  const getAddress = (e) => {
    if ((CEP).length === 8){
      axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
        .then(res => {
        const dados = res.data;
        setAddress(dados);
      });
    } else {
        e.preventDefault();
        alert('Insira um CEP valido');
      };
  };

  return (
    <InputContainer>
      <div>
        <input 
          type='number'
          name='CEP'
          value={CEP}
          onChange={setForm}
          placeholder='  Digite seu CEP'
        />
        <Link to='/internetOffers'>
          <button type='button' onClick={getAddress}>Ver planos disponíveis</button>
        </Link>
      </div>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-left: 50px;

  input {
    height: 30px;
    width: 200px;
    border-radius: 20px;
    color: whitesmoke;
    font-size: bigger;
    background-color: black;
    transition: box-shadow 0.5s;
  }
    
  input:focus {
    border: 4px solid #11ffff;
    color: #11ffff;
    box-shadow: 0px 0px 35px #11ffff, 0px 0px 15px #11ffffc0 inset;
    box-shadow: 0px 0px 10px #11ffffcc, 0px 0px 3px #11ffff;
  }

  button {
    margin-left: 20px;
    height: 40px;
    border-radius: 20px;
    background-color: #01094e;
    color: whitesmoke;
    transition: box-shadow 0.5s;
  }

  button:hover {
    border: 4px solid #11ffff;
    color: #11ffff;
    box-shadow: 0px 0px 35px #11ffff, 0px 0px 15px #11ffffc0 inset;
    box-shadow: 0px 0px 10px #11ffffcc, 0px 0px 3px #11ffff;
  }
    
`;