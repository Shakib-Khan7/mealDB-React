/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Food.css'

const Food = (props) => {
    const {idCategory,strCategory,strCategoryThumb,strCategoryDescription} = props.food;
    const handleCart = props.handleCart;
    return (
        <div className='foods-container'>
            <img src={strCategoryThumb} alt="" />
            <p>Food name: <b>{strCategory}</b></p>
            <button className='btn-cart' onClick={()=>handleCart(props.food)}>Add to cart</button>
            
        </div>
    );
};

export default Food;