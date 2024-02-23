/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [foods,setFoods] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data =>setFoods(data.categories))
    },[])
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = []
        for(const name in storedCart){
            const addedFood = foods.find(fd => fd.strCategory === name)
            if(addedFood){
                savedCart.push(addedFood)

            }
            
        }
        setCart(savedCart)
    },[foods])
    

    
    

    const handleCart = (food) =>{
        let addedFood =[];
              
        const exists = cart.find(pd=>pd.idCategory === food.idCategory)
        
        if(!exists){
            addedFood =[...cart,food]
        }
        else{
            const remaining = cart.filter(pd=>pd.idCategory !== food.idCategory);
            addedFood = [...remaining,exists]
              
        }
        
        
        
        
        
        
        setCart(addedFood)
        addToDb(food.strCategory)
        
        
    }




    return (
        <div className='shop-container'>
            <div className='food-container'>
                {
                    foods.map((food)=>
                    <Food key={food.idCategory}
                    food = {food}
                    handleCart = {handleCart}
                    
                    ></Food>
                    
                    )
                }
                

            </div>
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>


            </div>
        </div>
    );
};

export default Shop;