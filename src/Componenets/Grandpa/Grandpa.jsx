import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import './Grandpa.css' 
export const ringContext=createContext('gold')
export const moneyContext=createContext(1)
const Grandpa = () => {
    const [money,setMoney]=useState(0);
    return (
        <div className='container'>
          <moneyContext.Provider value={[money,setMoney]}>
          <ringContext.Provider value='golden-ring'>
           <h2>Grandpa</h2>
            <h4>Money : {money}</h4>
            <Father></Father>
           </ringContext.Provider>
          </moneyContext.Provider>
        </div>
    );
};

export default Grandpa;