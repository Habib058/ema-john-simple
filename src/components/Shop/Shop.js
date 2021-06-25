import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/product'

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct =(product) =>{
        console.log("Product added",product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop_container'>
            <div className="product_container">

                {
                    products.map(pd => <Product

                        handleAddProduct= {handleAddProduct} 
                         product = {pd}>

                         </Product>)
                }
            </div>
            <div className="cart_container">
                <h3>This is cart</h3>
                <h5>Order Summery:{cart.length}</h5>
            </div>

        </div>
    );
};

export default Shop;