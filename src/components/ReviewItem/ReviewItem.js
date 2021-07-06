import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.product;
    const styleCart ={
        borderBottom : '1px solid gray',
        marginBottom : '10px',
        paddingBottom:'20px'
    }
    return (
        <div style={styleCart}>
            <h4>{name}</h4>
            <p>Quantity:{quantity}</p>
            <p>price:{price}</p>
            <button onClick={()=>props.handleRemoveBtn(key)} className="btn btn-danger">Remove</button>
        </div>
    );
};

export default ReviewItem;