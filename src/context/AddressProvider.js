import React, { useState, createContext } from 'react';

export const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState([]);
  const context = {
    address,
    setAddress
  };
  return (
    <AddressContext.Provider value={ context }>
      { children }
    </AddressContext.Provider>
  );
};

export default AddressProvider;

