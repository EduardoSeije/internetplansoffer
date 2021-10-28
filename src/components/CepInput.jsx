import React, { useContext } from 'react'
import { useForm } from 'react-hooks-helper';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AddressContext } from '../context/AddressProvider';

const defaultCep = {
  CEP: '',
}

export const CepInput = () => {
  const [formData, setForm] = useForm(defaultCep);
  const { CEP } = formData; 
  const { address, setAddress } = useContext(AddressContext);

  const getAddress = (e) => {
    if ((CEP).length === 8){
          axios.get(`https://viacep.com.br/ws/${CEP}/json/`)
            .then(res => {
              const dados = res.data;
              console.log(dados);
              setAddress(dados);
              console.log(address);
            })
        } else {
            e.preventDefault();
            alert('Insira um CEP valido');
        };
};

  return (
    <div>
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
