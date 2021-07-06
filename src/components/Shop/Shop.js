import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/product'
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        // console.log("Product added",product);
        const toBeAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAdded);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = product.quantity + 1;
            product.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...others, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);

    }
    useEffect(() => {
        const savedData = getDatabaseCart();
        const productKey = Object.keys(savedData);
        const cartDetails = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedData[productKey];
            return (product);
        });
        setCart(cartDetails);

    }, [])
    return (
        <div className='shop_container'>
            <div className="product_container">

                {
                    products.map(pd => <Product
                        key={pd.key}
                        showAddToCart={true}
                        handleAddProduct={handleAddProduct}
                        product={pd}>

                    </Product>)
                }
            </div>
            <div className="cart_container">
                <Cart cart={cart}>
                    <Link to="/review"><button className="btn btn-success">Order Review</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;