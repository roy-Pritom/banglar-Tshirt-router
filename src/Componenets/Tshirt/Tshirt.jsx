import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt, addShirtToCart}) => {
    const {_id,picture,name,price,gender}=tshirt;
  
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
             <h4>{name?name:'no name'}</h4>
             <p>Price :${price}</p>
             <p>{gender}</p>
            <button className='buy-btn' onClick={()=> addShirtToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;