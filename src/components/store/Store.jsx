import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Store.css'
const Store = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart] =useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    const addTocart=(product)=>{
        const newCart=[...cart,products]
        setCart(newCart);
    }
    return (
        <div className='store-container'>
            <div className="products-container">
               {
                products.map(product=><Product product={product} key={product.id} addTocart={addTocart}></Product>)
               }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <h4>Cart item: {cart.length}</h4>
            </div>
            
        </div>
    );
};

export default Store;