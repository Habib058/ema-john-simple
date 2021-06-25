import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    console.log(props)
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className ='productHeading'>{name}</h3> 
                <br />
                <p><small>by:{seller}</small></p>
                <p>Price:${price}</p>
                <br />
                <p><small>Only {stock} available order soon</small></p>
                <button className ='shoppingCart' onClick ={() =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default product;