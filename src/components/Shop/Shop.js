import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct =(product) =>{
        // console.log("Product added",product);
        const newCart = [...cart,product];
        setCart(newCart);
        const cartDetails = newCart.filter(pd =>pd.key ===product.key);
        const count = cartDetails.length;
        addToDatabaseCart(product.key,count);

    }
    return (
        <div className='shop_container'>
            <div className="product_container">

                {
                    products.map(pd => <Product
                        key = {pd.key}
                        showAddToCart ={true}
                        handleAddProduct= {handleAddProduct} 
                         product = {pd}>

                         </Product>)
                }
            </div>
            <div className="cart_container">
                <Cart cart = {cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;