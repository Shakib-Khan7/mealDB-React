import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let foodName = '';
    let allFoods = [];

    for (const food of props.cart) {
        allFoods.push(food.strCategory)
    }
    for (const name of allFoods) {
        foodName += name + ',';
    }


    return (
        <div className='cart'>
            <h2>Cart Summary</h2>
            <p>selected items:{props.cart.length}</p>
            <p>Food name: {foodName}</p>
        </div>
    );
};

export default Cart;