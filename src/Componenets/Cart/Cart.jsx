import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0)
    {
        message=<p>please add a product</p>
    }
    return (
        <div className='cart'>
            <h3 className={cart.length===2?'blue':'red'}>Selected items : {cart.length}</h3>
            <p className={`border bold ${cart.length===1?'yellow':'green'}`}>Something</p>
            {
                cart.length<=2 ?'Fokira':"Aro Kino"
            }
            {message}
            <div className="">
                {
                cart.map(pd=><p
                key={pd._id}>{pd.name}
                <button onClick={()=>handleRemoveFromCart(pd._id)}>X</button>
                </p>)

                }
            </div>
            {
                cart.length===2 && <p>Lucky Double</p>
            }
            {
                cart.length===3 || 'tinta to hiolo na'
            }
        </div>
    );
};

export default Cart;

/**
 *CONDITIONAL RENDERING 
 * 1.Use if or else to set a variable that will contain an element,components.
 * 2.ternary operator  condition ? 'true':'false'
 * 3.logical && (if the condition is true then the next thing will be displayed) 
 * 3.logical || (if the condition is false then the next thing will be displayed) 
 * **/ 
/**
 * CONDITIONAL CSS CLASS
 * 1.use ternary
 * 2.ternary inside template string
 * */ 