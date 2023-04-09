import React, { useContext } from 'react';
import { moneyContext, ringContext } from '../Grandpa/Grandpa';

const Special = ({children}) => {
    const ring=useContext(ringContext);
    const [money]=useContext(moneyContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>{children}</small></p>
            <p><small>Ring:{ring}</small></p>
            <p><small>Money:{money}</small></p>
        </div>
    );
};

export default Special;