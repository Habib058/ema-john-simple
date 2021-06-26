import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total,prd) =>total +prd.price ,0);
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
        const product = cart[index];
        total = total+ product.price;
        
    }
    let shipping = 0;
    if(total>35){
        shipping =0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if( total>0){
        shipping = 12.99;
    }
    let tax =total/10;
    let totalPrice = total+ shipping + tax;
    return (
        <div>
            <h5>Order Item:{cart.length}</h5>
            <p>Product Price:{total}</p>
            <p>Shipping Charge: {shipping}</p>
            <p><small>Tax:{tax}</small></p>
            <p>total Price:{totalPrice}  </p>
        </div>
    );
};

export default Cart;