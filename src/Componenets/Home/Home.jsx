import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const tshirts=useLoaderData();
    console.log(tshirts)
    const [cart,setCart]=useState([]);

    const addShirtToCart=(tshirt)=>{
        const exist=cart.find(product=>product._id===tshirt._id)
        if(exist)
        {
        //   alert('no')
        toast.warning('You have already selected this item')
        }
        else{
            const newCart=[...cart,tshirt];
            setCart(newCart)
        }
        
    }

    const handleRemoveFromCart=(id)=>{
        console.log(id)
          const remaining=cart.filter(product=>product._id!==id)
          setCart(remaining)
    }

    return (
        <div className='shop-container'>
          <div className="shop">
            {
              tshirts.map(product=><Tshirt
              tshirt={product}
              key={product._id}
              addShirtToCart={ addShirtToCart}
              ></Tshirt>)
            }
          </div>
          <div className="cart-container">

            <Cart
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}></Cart>
          </div>
        </div>
    );
};

export default Home;