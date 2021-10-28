import React from 'react'
import { useForm } from 'react-hooks-helper';
import { Link } from 'react-router-dom';
import axios from 'axios';

const defaultCep = {
  CEP: '',
}

const defaultAddress = {
  Address: [],
};

export const CepInput = () => {
  const [formData, setForm] = useForm(defaultCep);
  const [formAddress] = useForm(defaultAddress);
  const { CEP } = formData; 
  const { Address } = formAddress;

  console.log(CEP);
  console.log(Address);

  const getAddress = () => {
    if ((CEP).length === 8){
          axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
            .then(res => {
              const dados = res.data;
              defaultAddress.Address.push(dados);
            })
        } else {
      alert('Insira um CEP valido');
      };
      console.log(Address);
};

  return (
    <div>
      <h1>CepInput</h1>
      <input 
        type='text'
        name='CEP'
        value={CEP}
        onChange={setForm}
        placeholder='Digite seu CEP'
      />
      <Link to='/internetOffers'>
      <button type='button' onClick={getAddress}>Ver planos disponíveis</button>
      </Link>
    </div>
  );
};
