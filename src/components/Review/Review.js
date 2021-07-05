import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Shop from '../Shop/Shop';

const Review = () => {
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartDetails = productKey.map(key =>{
            const product =fakeData.find(pd =>pd.key ===key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartDetails);
        //console.log(cartDetails);
    },[])
    const handleRemoveBtn = (productKey) =>{
        //console.log('remove clicked');
        const restCart = cart.filter(pd => pd.key !==productKey);
        setCart(restCart);
        removeFromDatabaseCart(productKey);
    }
    return (
        <div className ="shop_container">
            <div className="product_container">
            {
                cart.map(pd=><ReviewItem 
                    handleRemoveBtn ={handleRemoveBtn}
                    product={pd}>
                    </ReviewItem>)
            }
            </div>
            <Cart cart ={cart}></Cart>
        </div>
    );
};

export default Review;