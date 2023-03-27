import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {id,name,img,ratings,seller,price}=props.product
    const addTocart=props.addTocart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className="product-title">{name}</p>
            <p>Price:${price}</p>
            <p><small>Manufacture:{seller}</small></p>
            <p><small>Ratings:{ratings} Star</small></p>
            </div>

            <button onClick={()=>{addTocart(props.product)}} className='btn-cart'>Add to cart <FontAwesomeIcon icon={faCartPlus} /></button>

        </div>
    );
};

export default Product;