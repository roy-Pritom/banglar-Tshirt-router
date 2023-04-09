import React, { useContext } from 'react';
import Special from '../Special/Special';
import { moneyContext } from '../Grandpa/Grandpa';

const Myself = () => {
const [money,setMoney]=useContext(moneyContext);
    return (
        <div className='container'>
            <h2>Myself</h2>
            <button onClick={()=>setMoney(money+2000)}>Add Money</button>
            <Special>Ananika</Special>
        </div>
    );
};

export default Myself;