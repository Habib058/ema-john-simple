import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const product = (props) => {
    const {name,img,seller,price,stock,key} = props.product;
    //console.log(props);
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className ='productHeading'><Link to ={"/"+key} > {name}</Link></h3> 
                <br />
                <p><small>by:{seller}</small></p>
                <p>Price:${price}</p>
                <br />
                <p><small>Only {stock} available order soon</small></p>
                {props.showAddToCart && <button className ='shoppingCart' onClick ={() =>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            </div>
        </div>
    );
};

export default product;