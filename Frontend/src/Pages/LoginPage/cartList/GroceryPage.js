import React, { useState } from 'react'
import classes from './cart_list.module.css'
import emptyGrocery from './groceryEmpty.png'
import { useNavigate } from 'react-router-dom'
const GroceryPage = () => {

    let navigate = useNavigate()
    const cartLoginHandler =() => {
        console.log(true)
        navigate('/signInPage')
    }
  return (
    <div className={classes.grocery_page}>
        <img src={emptyGrocery} alt='image not found' className={classes.empty_img} ></img>
        <h4>Your basket is empty!</h4>
        <h5>Enjoy Upto 50% Savings on Grocery</h5>
        <button className={classes.shop_btn}>Shop Now</button>
    </div>
  )
}

export default GroceryPage
